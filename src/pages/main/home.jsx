import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="main"
      initial={{ width: "5%" }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.75 } }}
    >
      <section className="content content-wrapper">
        <div className="view">
          <h2>Working on it!</h2>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
