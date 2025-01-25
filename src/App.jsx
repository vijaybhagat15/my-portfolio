import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";

const App = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
    </Router>
  );
};

export default App;
