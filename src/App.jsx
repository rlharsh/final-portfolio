import { useState } from "react";

// Import the primary stylesheet
import "./app.css";
import ApplicationLayout from "./Layouts/ApplicationLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SideLayout from "./Layouts/SideLayout";
import NormalLayout from "./Layouts/NormalLayout";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ApplicationLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<SideLayout />}>
              <Route index element={<About />} />
            </Route>
            <Route path="/contact" element={<SideLayout />}>
              <Route index element={<Contact />} />
            </Route>
            <Route path="/projects" element={<NormalLayout />}></Route>
            <Route path="/blog" element={<NormalLayout />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
