import { useEffect } from "react";
import Card from "../../components/Card/Card";
import styles from "./Projects.module.scss";
import { projectsData } from "../../data/data";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = ({ id }) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div id={id}>
      <h2 data-aos="zoom-in" className={styles.header}>
        Projects
      </h2>
      <div className={styles.cardsContainer}>
        {projectsData.map((project, index) => {
          return <Card key={index} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
