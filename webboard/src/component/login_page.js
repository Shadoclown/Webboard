import React from 'react';
import '../style_component/login_page.css';

function Login_page({ closePopup }) {
    return (
        <div className="main_login">
            <div className="login_container">
                <button className="close_btn" onClick={closePopup}>&times;</button>
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
                    <p className="signup">
                        Don't have an account? <a href="#">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login_page;
