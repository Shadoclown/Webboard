import React, { useEffect, useState } from 'react';
import './App.css';
import All_content from './component/all_content';
import { supabase } from './component/connect';

function App() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('cards') // Replace 'cards' with your Supabase table name
        .select('*');

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setCardData(data);
      }
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
          <button className="login_btn" id="btn">Login</button>
          <button className="signup_btn" id="btn">Sign up</button>
        </div>
      </nav>

      <All_content card_data={cardData} />
    </div>
  );
}

export default App;
