import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import AboutPage from "./pages/about/about";
import Experience from "./pages/experience/experience";
import Navbar from "./components/navigation/top_navigation/nav_bar";
import ProjectsPage from "./pages/projects/projects";
import Skills from "./pages/skills/skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
