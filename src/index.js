import React from "react";
import ReactDOM from "react-dom";
import Info from "./components/Info";
import Var from "./components/Var";
import Weather_app_img from "./img/weather-pic.png";
import audio_app_img from "./img/audio_pic.png";
import "./css/styles.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./pages/About";

ReactDOM.render(
  <Router>
    <Header />

    <Routes>
      <Route path="/about" element={<About />} />
    </Routes>
    <Var
      title="Weather App"
      link="https://samikshyakc1996.github.io/weather-app-project/"
      Imgsrc={Weather_app_img}
      alt="weather-app pic"
      description="This app gives the temperature and weather conditions of any given location."
    />
    <Var
      title="Audio Player App"
      link="https://samikshyakc1996.github.io/audio-player-project/"
      Imgsrc={audio_app_img}
      alt="audio player app pic"
      description="This app displays a playlist of a few songs. You can stream any song from the list."
    />

    <Footer />
  </Router>,

  document.getElementById("root")
);
