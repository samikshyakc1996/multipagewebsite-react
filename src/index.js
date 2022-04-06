import React from "react";
import ReactDOM from "react-dom";
import Info from "./components/Info";

import "./css/styles.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Project from "./pages/Project";
import Contact from "./pages/Contact";

ReactDOM.render(
  <Router>
    <Header />

    <Routes>
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    <Info />
    <Footer />
  </Router>,

  document.getElementById("root")
);
