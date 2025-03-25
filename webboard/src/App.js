import logo from './logo.svg';
import './App.css';

function App() {
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
    </div>
  );
}

export default App;
