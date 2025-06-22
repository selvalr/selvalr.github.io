import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experince";
import Project from "./components/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/" element={<About />} />*/}
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
