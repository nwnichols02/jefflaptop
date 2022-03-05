import logo from "./logo.svg";
import "./App.css";
import img from "./images/x151.png";
import imr from './images/pexels-junior-teixeira-2047905.jpg'

function App() {
  return (
    <div className="App">
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <a href="Home">Home</a>
        <a href="About">About</a>
        <a href="Contact">Contact</a>
      </nav>
      <header className="App-header">
        <h1>
          Becoming successful begins with <br />
          the right tools
        </h1>
        <p>Find out below how you can take your office to the next level</p>
        <button>Get Started</button>
      </header>
      <div className="intro-img">
        <img src={imr}/>
      </div>
      <header>
        <h2>AlienWare</h2>
        <p></p>
        <img src={img} />
        <button>Learn More</button>
      </header>
    </div>
  );
}

export default App;
