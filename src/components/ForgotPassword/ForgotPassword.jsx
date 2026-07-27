import AuthLayout from "../AuthLayout/AuthLayout";
import AuthHero from "../AuthHero/AuthHero";
import AuthCard from "../AuthCard/AuthCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const isValidEmail = (value) => {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!email.trim()) {

      setError("Please enter your email address.");

      return;

    }

    if (!isValidEmail(email)) {

      setError("Please enter a valid email address.");

      return;

    }

    setError("");

    navigate("/verify", { state: { email, from: "/forgot-password" } });

  };

  return (

    <AuthLayout illustration={<AuthHero />}>

      <AuthCard

        title="Forgot Password"

        subtitle="Enter your email and we'll send you a code to reset your password."

      >

        <form className="forgot-form" onSubmit={handleSubmit} noValidate>

          <div className="auth-input-group">

            <label>Email Address</label>

            <input

              type="email"

              placeholder="Enter your email"

              value={email}

              onChange={(e) => {

                setEmail(e.target.value);

                if (error) setError("");

              }}

              className={error ? "input-error" : ""}

            />

            {error && <span className="field-error">{error}</span>}

          </div>

          <button className="auth-submit btn-primary" type="submit">

            Send Code

          </button>

        </form>

      </AuthCard>

    </AuthLayout>

  );

}

export default ForgotPassword;