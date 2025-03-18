import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './assets/layout';
import Home from "./assets/home";
import Login from './assets/login';
import Signup from './assets/signup';
import AboutUs from './assets/AboutUs';
import Start from './assets/start';
import Profile from './assets/profile';
import Calorie from './assets/calorie';
import Food from './assets/Food';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="start" element={<Start />} />
            <Route path="profile" element={<Profile />} />
            <Route path="calorie" element={<Calorie />} />
            <Route path="food" element={<Food />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App
