import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card';

function App() {
  const card_data = [
    { title: 'Science', content: 'This is some content about science.' },
    { title: 'Technology', content: 'This is some content about technology.' },
    { title: 'Math', content: 'This is some content about math.' },
    { title: 'Engineering', content: 'This is some content about engineering.' },
  ];

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

      <div className="wel">
        <h1>Welcome to the website</h1>
      </div>

      <div className="menu_bar">
        <button className="all_room" id="room_btn">All</button>
        <button className="first_room" id="room_btn">Room 1</button>
        <button className="second_room" id="room_btn">Room 2</button>
        <button className="third_room" id="room_btn">Room 3</button>
        <button className="forth_room" id="room_btn">Room 4</button>
        <button className="fifth_room" id="room_btn">Room 5</button>
      </div>

      <div className="main_content">
        {card_data.map((data, index) => (
          <Card key={index} title={data.title} content={data.content} />
        ))}
      </div>
    </div>
  );
}

export default App;
