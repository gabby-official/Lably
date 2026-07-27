import "./SignupForm.css";

import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function SignupForm(){

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

  navigate("/verify", { state: { email, from: "/signup" } });

};

return(

<form className="auth-form" onSubmit={handleSubmit} noValidate>


<button
type="button"
className="google-button"
>

<Icon
icon="logos:google-icon"
width="20"
/>

Continue with Google

</button>


<div className="auth-divider">

<span>
OR
</span>

</div>


<div className="auth-input-group">

<input
type="tel"
placeholder="Phone number"
/>

</div>


<div className="auth-input-group">

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


<div className="auth-input-group">

<input
type="password"
placeholder="Enter your Password"
/>

</div>


<div className="auth-input-group">

<input
type="password"
placeholder="Confirm Password"
/>

</div>


<button
className="auth-submit btn-primary"
type="submit"
>

Create an Account

</button>


<p className="auth-switch">

    Have an account?

    <Link to="/login">
        Sign in
    </Link>

</p>


<p className="auth-privacy">

    By continuing you acknowledge Our <a href="#">Privacy Policy</a>.

</p>


</form>

)

}


export default SignupForm;