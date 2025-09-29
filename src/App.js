import "./App.css";
import { Link, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

//admin
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";





function App() {

// will be visible for small screens sizes
 const [menuOpen, setMenuOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);

 const toggleMenu = () => setMenuOpen(prev => !prev);

 useEffect(() => {
   const onScroll = () => setScrolled(window.scrollY > 8);
   window.addEventListener('scroll', onScroll, { passive: true });
   return () => window.removeEventListener('scroll', onScroll);
 }, []);

 

const isAuthenticated =!!localStorage.getItem('token');
  return (


    <div className="App">
      <nav className={`nav-large-screen ${scrolled ? 'nav-scrolled' : ''}`}>
        <div>
          <h1>EkaiEmpiror</h1>
        </div>
        <Link to="/" >Home</Link>
        <Link to="/event">Events</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/gallery">Shop</Link>
        <Link to="/blog">Blog</Link> */}
      </nav>

 <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="logo">
          <h1>EkaiEmpiror</h1>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/event" onClick={toggleMenu}>Events</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          {/* <Link to="/gallery" onClick={toggleMenu}>Shop</Link>
          <Link to="/blog" onClick={toggleMenu}>Blog</Link> */}
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      <main className="app-content">
            {/* protected from client */}
        

        <Routes>
           {/* Public admin route */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Protected admin dashboard route */}
      <Route
        path="/admin/dashboard"
        element={
          isAuthenticated ? <AdminDashboard /> : <Navigate to="/admin/login" />
        }
      />
          
          <Route path="/"  element={<Home />} />
          <Route path="/event" element={<Events />} />
          <Route path="/about" element={<About />} />
        {/* <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} /> */}
        <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
