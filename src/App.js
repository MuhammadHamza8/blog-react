import React from "react";
import BlogPage from "./pages/blog-page";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';    
import AritclePage from "./pages/article-page";
import ProjectPage from "./pages/projects-page";
import AboutPage from "./pages/about-page";


const App = () => {
  return (
    <Router>

      <Routes>
          <Route path="/" exact element={<BlogPage />} />
          <Route path="/article" exact element={<AritclePage/>} />
          <Route path="/projects" exact element={<ProjectPage/>} />
          <Route path="/about" exact element={<AboutPage/>} />
   

         </Routes>
         
    </Router>
  );
};

export default App;