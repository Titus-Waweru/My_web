import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import News from "./components/News";
import Layout from "./components/Layout";

// FIXED: Imports must match actual filenames
import LaunchingLandlink from "./Pages/News/LaunchingLandlink";
import AIInSpatialData from "./Pages/News/AIInSpatialData";
import ChimpWaSiraki from "./Pages/News/ChimpWaSiraki";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />

          {/* News detail pages */}
          <Route path="/news/launching-landlink" element={<LaunchingLandlink />} />
          <Route path="/news/ai-in-spatial-data" element={<AIInSpatialData />} />
          <Route path="/news/chimp-wa-siraki" element={<ChimpWaSiraki />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
