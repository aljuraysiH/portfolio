import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <div className="app">
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={<Navbar language={language} setLanguage={setLanguage} />}
          >
            <Route index element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
