// import Posts from "./components/Posts";
import './assets/styles/global.css';
import { Router } from "react-router-dom";
import Login from './pages/Login';

const App = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src="/logo.svg" className="App-logo" alt="logo" />
    //     <h1>React Posts Sharer</h1>
    //   </header>
    //   <Posts />
    // </div>
    <Router>
      <Login handleLogin={handleLogin} /></Router>
  );
}

export default App;