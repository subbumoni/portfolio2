import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReadMore from "./components/readmore/ReadMore";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WebDesignReadMore from "./components/readmore/WebDesignReadMore";
import FrontendReadMore from "./components/readmore/FrontendReadMore";
import BackendReadMore from "./components/readmore/BackendReadMore";
import FullStackReadMore from "./components/readmore/FullStackReadMore";
import ContentWritingReadMore from "./components/readmore/ContentWritingReadMore";
import DigitalMarketingReadMore from "./components/readmore/DigitalMarketingReadMore";
import Certificate from "./components/Certificate";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <Hero />

              <div className="w-full h-px bg-gray-300"></div>
              <About />

              <div className="w-full h-px bg-gray-300"></div>
              <Service />

              <div className="w-full h-px bg-gray-300"></div>
              <Projects />

              <div className="w-full h-px bg-gray-300"></div>
              <Certificate />

              <div className="w-full h-px bg-gray-300"></div>
              <Contact />
            </>
          }
        />

        {/* Service page route */}
        <Route path="/service" element={<Service />} />

        {/* Read More pages */}
        <Route path="/read-more" element={<ReadMore />} />
        <Route path="/webdesign-read-more" element={<WebDesignReadMore />} />
        <Route path="/frontend-read-more" element={<FrontendReadMore />} />
        <Route path="/backend-read-more" element={<BackendReadMore />} />
        <Route path="/fullstack-read-more" element={<FullStackReadMore />} />
        <Route
          path="/contentwriting-read-more"
          element={<ContentWritingReadMore />}
        />
        <Route
          path="/digitalmarketing-read-more"
          element={<DigitalMarketingReadMore />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
