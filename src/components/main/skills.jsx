import { motion } from "framer-motion";
import SkillsList from "../lists/skillsList";

function Skills() {
  return (
    <motion.div
      className="main"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.75 } }}
    >
      <section className="content content-wrapper">
        <div className="view page-centered">
          <SkillsList />
        </div>
      </section>
    </motion.div>
  );
}

export default Skills;
