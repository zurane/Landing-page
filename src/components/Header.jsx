import React from "react";
import { Component } from "react";
import heroImage from "../assets/hero-image.jpg";
import Logo from "../assets/Meetly.svg";


class Header extends Component {
    state = {
    }
    render() {
        return (
            <>
                <header className="header-element">
                    <nav className="navigation">
                        <img src= {Logo} alt="logo" width="50px" />
                        <ul className="nav-items">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Plans & Pricing</a></li>
                            <li><a href="/">Products</a></li>
                            <li><a href="/">Resources</a></li>
                            <li><a href="/">Support</a></li>
                        </ul>
                    </nav>
                    <div className="hero-section">
                        <div className="hero-title">
                            <h1>
                                Seamless Video <br />Conferencing Anywhere<br />
                                Anytime.
                            </h1>
                            <p className="subtext">Revolutionize the way your team collaborates with<br/> our user-friendly video
                                conferencing platform.<br/>Register today and see the difference.</p>
                            <button className="register-btn">Register now</button>
                            <button className="sign-in-btn">Sign in</button>
                      </div>
                            <img src={heroImage} alt="hero-img" width="50%"/>
                    </div>
                </header>
            </>
        );
    }

}

export default Header;
