import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../src/App.css";
import Home from "./component/Home";
import About from "./component/About";
import Register from "./component/Register";
// import Home from "../src/components/home";
// import Product from "../src/components/product";

// import Category from "../src/components/category";
// import About from "../src/components/about";
// import Contact from "../src/components/contact";

const App = () => {
  return (
    <div>
      <Router>
        <div className="link">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
