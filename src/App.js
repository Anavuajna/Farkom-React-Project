import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Contact from "./Contact";
import Home from "./Home";
import Shop from "./Shop";

function App() {
  return <Router>
    <nav>
      <Link to="/" className="link">О нас</Link>
      <Link to="shop" className="link">Магазин</Link>
      <Link to="contact" className="link">Контакты</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>
  </Router>
}

export default App;
