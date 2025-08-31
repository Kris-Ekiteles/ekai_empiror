import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Events from "./components/Events";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <h1>EkaiEmpiror</h1>
        </div>
        <Link to="/">Home</Link>
        <Link to="/event">Events</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Shop</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <Routes>
        <Route path="/#"  element={<Home />} />
        <Route path="/event" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
