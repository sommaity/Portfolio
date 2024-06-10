import React, { useState} from "react";
import NavBar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./component/style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const load = useState(true);
  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;