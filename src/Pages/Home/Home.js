import { React } from "react";
import Hero from "../../components/Hero/Hero";
import Skills from "../../components/Skills/Skills";
import Projects from "../Projects/Projects";
import { motion } from "framer-motion";
import { homeVariatns } from "./Home.variants";

const Home = ({ toggleTheme, theme }) => {
  return (
    <motion.div
      variants={homeVariatns}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
    >
      <Hero toggleTheme={toggleTheme} theme={theme} />
      <Projects id="projects" />
      <Skills id="skills" />
    </motion.div>
  );
};

export default Home;
