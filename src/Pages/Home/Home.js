import { React } from "react";
import Hero from "../../components/Hero/Hero";
import Skills from "../../components/Skills/Skills";
import Projects from "../Projects/Projects";
import About from "../../components/About/About";
import { motion } from "framer-motion";
import { homeVariatns } from "./Home.variants";

const Home = ({ toggleTheme, theme }) => {
  return (
    <motion.main
      variants={homeVariatns}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
    >
      <Hero toggleTheme={toggleTheme} theme={theme} />
      <About id="about" />
      <Projects id="projects" />
      <Skills id="skills" />
    </motion.main>
  );
};

export default Home;
