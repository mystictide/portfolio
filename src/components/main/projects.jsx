import { motion } from "framer-motion";
import ProjectList from "../lists/projectList";

function Projects() {
  return (
    <motion.div
      className="main"
      initial={{ width: "5%" }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.75 } }}
    >
      <section className="content content-wrapper">
        <div className="view">
          <ProjectList />
        </div>
      </section>
    </motion.div>
  );
}

export default Projects;
