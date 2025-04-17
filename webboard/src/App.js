import React, { useEffect, useState } from 'react';
import Login_page from './component/login_page';
import Signup_page from './component/signup_page';
import Homepage from './component/homepage';
import './App.css';

function App() {
  const [setPage, setPageState] = useState('Home');
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <a>
            <div className="logo">Webboard</div>
        </a>
        <div className="search_bar">
            <input type="search" placeholder="Search" />
        </div>
        <div className="button">
            <button
                className="login_btn"
                id="btn"
                onClick={() => setShowLogin(true)}>Login</button>
            <button 
                className="signup_btn" 
                id="btn"
                onClick={() => setShowSignup(true)}>Sign up</button>
        </div>
      </nav>

        {showLogin && (
            <div className="modal">
                <Login_page 
                    closePopup={() => setShowLogin(false)} 
                    switchToSignup={() => {setShowLogin(false); setShowSignup(true)}} />
            </div>
        )}
        {showSignup && (
            <div className="modal">
                <Signup_page 
                    closePopup={() => setShowSignup(false)} 
                    switchToLogin={() => {setShowSignup(false); setShowLogin(true)}} />
            </div>
        )}

      {setPage === 'Home' && <Homepage />}
    
    </div>
  );
}

export default App;
