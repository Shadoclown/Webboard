import React from 'react';
import '../style_component/signup_page.css';

function Signup_page({ closePopup, switchToLogin }) {
    return (
        <div className="main_signup">
            <div className="signup_container">
                <div className="close_btn">
                    <span onClick={closePopup}>&times;</span>
                </div>
                <h2 className="signup_title">Sign Up</h2>
                <form className="signup_form">
                    <div className="form_group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label htmlFor="C_password">Confirm password</label>
                        <input
                            type="C_password"
                            id="C_password"
                            name="C_password"
                            placeholder="Enter your Confirm password"
                            required
                        />
                    </div>
                    <button type="submit" className="signup_btn">Sign Up</button>
                    <p className="havelogin">
                        Already have an account? <span onClick={switchToLogin}>Login</span>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup_page;
