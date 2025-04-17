import React from 'react';
import '../style_component/login_page.css';

function Login_page({ closePopup, switchToSignup }) {
    return (
        <div className="main_login">
            <div className="login_container">
                <div className="close_btn">
                    <span onClick={closePopup}>&times;</span>
                </div>
                <h2 className="login_title">Login</h2>
                <form className="login_form">
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
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="login_btn">Login</button>
                    <p className="needsignup">
                        Don't have an account? <span onClick={switchToSignup}>Sign up</span>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login_page;
