import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <header><Navbar/></header>
        <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        exact
                        path="/about"
                        element={<About />}
                    />
                    <Route
                        exact
                        path="/portfolio"
                        element={<Portfolio />}
                    />
                    <Route
                        exact
                        path="/contact"
                        element={<Contact />}
                    />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
