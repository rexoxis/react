import logo1 from './img/movie_poster1.jpg';
import logo2 from './img/movie_poster2.jpg';
import logo3 from './img/movie_poster3.jpg';
import logo4 from './img/movie_poster4.jpg';
import logo5 from './img/movie_poster5.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Main_img">
          <img src={logo1} className="App-logo" alt="logo1" />
          <img src={logo2} className="App-logo" alt="logo2" />
          <img src={logo3} className="App-logo" alt="logo3" />
          <img src={logo4} className="App-logo" alt="logo4" />
          <img src={logo5} className="App-logo" alt="logo5" />
        </div>
      </header>
    </div>
  );
}

export default App;
