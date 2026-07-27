import "./LoginForm.css";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";


function LoginForm(){

return(

<form className="auth-form">


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

<label>
Email Address
</label>

<input
type="email"
placeholder="Enter your email"
/>

</div>



<div className="auth-input-group">

<label>
Password
</label>

<input
type="password"
placeholder="Enter your password"
/>

</div>



<div className="auth-options">

<label className="remember">

<input type="checkbox"/>

<span>
Remember me
</span>

</label>


<Link to="/forgot-password">
Forgot Password?
</Link>


</div>




<button
className="auth-submit btn-primary"
>

Login

</button>



<p className="auth-switch">

    Don't have an account?

    <Link to="/signup">
        Sign Up
    </Link>

</p>

</form>


)

}


export default LoginForm;