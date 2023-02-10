import React from "react";

// react router
import { Routes, Route } from "react-router-dom";

// pages
import HomePage from "./pages/home/Index";
import PersonalInfo from "./pages/personalInfo/Index";
import Experience from "./pages/experience/Index";
// import Education from "./pages/education/Index";
import Resume from "./pages/cv/Index";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personalInfo" element={<PersonalInfo />} />
        <Route path="/experience" element={<Experience />} />
        {/* <Route path="/education" element={<Education />} /> */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
};

export default App;
