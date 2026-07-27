import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);


    return (

        <header className="navbar">


            <div className="navbar-container">


                {/* LOGO */}

                <div className="navbar-logo">


                    <div className="navbar-logo-icon">

                        <span className="logo-circle circle-one"></span>
                        <span className="logo-circle circle-two"></span>
                        <span className="logo-circle circle-three"></span>
                        <span className="logo-circle circle-four"></span>

                    </div>


                    <div className="navbar-logo-text">

                        <span className="logo-home">
                            HOME
                        </span>

                        <span className="logo-lab">
                            LAB
                        </span>

                    </div>


                </div>




                {/* DESKTOP NAVIGATION */}

                <nav 
                    className={
                        menuOpen 
                        ? "navbar-links active"
                        : "navbar-links"
                    }
                >

                    <a href="/">
                        Home
                    </a>

                    <a href="#">
                        About Us
                    </a>

                    <a href="#">
                        Testimonials
                    </a>

                

                </nav>





                {/* DESKTOP BUTTON */}

                <Link to="/signup" className="navbar-btn">
                   Get Started
                 </Link>





                {/* MOBILE MENU BUTTON */}

                <button

                    className="navbar-toggle"

                    onClick={()=>
                        setMenuOpen(!menuOpen)
                    }

                    aria-label="Toggle navigation menu"

                    aria-expanded={menuOpen}

                >

                    <span></span>
                    <span></span>
                    <span></span>


                </button>



            </div>


        </header>

    );
}


export default Navbar;