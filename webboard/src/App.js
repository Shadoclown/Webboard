import React from 'react';
import './App.css';
import All_content from './component/all_content';

function App() {
  const card_data = [
    { title: 'Science', content: 'Exploring the wonders of the universe.Exploring the wonders of the universe.Exploring the wonders of the universe.Exploring the wonders of the universe.Exploring the wonders of the universe.Exploring the wonders of the universe.Exploring the wonders of the universe.Exploring the wonders of the universe.Exploring the wonders of the universe.Exploring the wonders of the universe.', room: 'Science' },
    { title: 'Technology', content: 'Innovations that change the world.', room: 'Technology' },
    { title: 'Math', content: 'Solving problems with numbers and logic.', room: 'Math' },
    { title: 'Engineering', content: 'Building the future with design and structure.', room: 'Engineering' },
    { title: 'Science', content: 'Understanding the laws of nature.', room: 'Science' },
    { title: 'Technology', content: 'Artificial intelligence and robotics.', room: 'Technology' },
    { title: 'Math', content: 'Geometry and algebra intersect.', room: 'Math' },
    { title: 'Engineering', content: 'Renewable energy solutions.', room: 'Engineering' },
    { title: 'Social', content: 'The impact of social media on youth culture.', room: 'Social' },
    { title: 'Social', content: 'Understanding social structures and communities.', room: 'Social' },
    { title: 'Science', content: 'New frontiers in space exploration.', room: 'Science' },
    { title: 'Technology', content: 'The future of quantum computing.', room: 'Technology' },
    { title: 'Social', content: 'The role of social movements in modern politics.', room: 'Social' },
    { title: 'Engineering', content: 'Smart cities and urban planning.', room: 'Engineering' },
    { title: 'Math', content: 'Calculus and its applications in real life.', room: 'Math' },
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

      <All_content card_data={card_data} />
    </div>
  );
}

export default App;
