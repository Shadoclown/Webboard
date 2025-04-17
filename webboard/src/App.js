import React, { useEffect, useState } from 'react';
import './App.css';
import All_content from './component/all_content';
import Login_page from './component/login_page';
import Signup_page from './component/signup_page';
import { supabase } from './component/connect';

function App() {
  const [cardData, setCardData] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from('information')
        .select(`
          info_id,
          content,
          title,
          category:category (category_name),
          user:user_id (username)
        `);

      setCardData(data);
      console.log(data);
    };

    fetchData();
  }, []);

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

      <All_content card_data={cardData} />

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
    </div>
  );
}

export default App;
