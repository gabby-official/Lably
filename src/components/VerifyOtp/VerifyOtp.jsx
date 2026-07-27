import "./VerifyOtp.css";

import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

function maskEmail(email) {

  if (!email || !email.includes("@")) return "your email";

  const [local, domain] = email.split("@");

  const firstChar = local.charAt(0).toUpperCase();

  return `${firstChar}*****@${domain}`;

}

function VerifyOtp() {

  const navigate = useNavigate();

  const location = useLocation();

  const email = location.state?.email || "";

  const fromPath = location.state?.from || "/signup";

  const maskedEmail = maskEmail(email);

  const [values, setValues] = useState(["", "", "", ""]);

  const inputsRef = useRef([]);

  const [countdown, setCountdown] = useState(0);

  const [resendMessage, setResendMessage] = useState("");

  useEffect(() => {

    if (countdown <= 0) return;

    const timer = setInterval(() => {

      setCountdown((prev) => prev - 1);

    }, 1000);

    return () => clearInterval(timer);

  }, [countdown]);

  const handleChange = (index, e) => {

    const val = e.target.value.replace(/[^0-9]/g, "").slice(-1);

    const next = [...values];

    next[index] = val;

    setValues(next);

    if (val && index < 3) {

      inputsRef.current[index + 1]?.focus();

    }

  };

  const handleKeyDown = (index, e) => {

    if (e.key === "Backspace" && !values[index] && index > 0) {

      inputsRef.current[index - 1]?.focus();

    }

  };

  const handleConfirm = (e) => {

    e.preventDefault();

    // frontend only — no backend wired yet

    console.log("OTP entered:", values.join(""));

  };

  const handleResend = () => {

    if (countdown > 0) return;

    // frontend only — simulate resend

    setResendMessage("A new OTP has been sent.");

    setCountdown(15);

  };

  return (

    <div className="otp-page">

      <button

        type="button"

        className="otp-back"

        onClick={() => navigate(fromPath)}

        aria-label="Go back"

      >

        <Icon icon="mdi:arrow-left" width="22" />

      </button>

      <div className="otp-content">

        <h1 className="otp-title">

          Verification Code

        </h1>

        <p className="otp-subtitle">

          We have sent the verification code

          <br />

          to your email {maskedEmail}.

        </p>

        <form className="otp-form" onSubmit={handleConfirm}>

          <div className="otp-inputs">

            {values.map((val, i) => (

              <input

                key={i}

                ref={(el) => (inputsRef.current[i] = el)}

                type="text"

                inputMode="numeric"

                maxLength={1}

                value={val}

                onChange={(e) => handleChange(i, e)}

                onKeyDown={(e) => handleKeyDown(i, e)}

                className="otp-box"

              />

            ))}

          </div>

          <button

            type="submit"

            className="otp-submit btn-primary"

          >

            Confirm

          </button>

        </form>

        <p className="otp-resend">

          {countdown > 0 ? (

            <>Resend available in {countdown}s</>

          ) : (

            <>

              Haven't got the email yet?{" "}

              <button

                type="button"

                className="otp-resend-link"

                onClick={handleResend}

              >

                Resend email

              </button>

            </>

          )}

        </p>

        {resendMessage && (

          <p className="otp-resend-confirmation">

            {resendMessage}

          </p>

        )}

      </div>

    </div>

  );

}

export default VerifyOtp;