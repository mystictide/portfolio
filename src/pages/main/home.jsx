import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function Home() {
  return (
    <motion.div
      className="main"
      initial={{ width: "5%" }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.75 } }}
    >
      <section className="content content-wrapper">
        <div className="view self">
          <h1>
            FURKAN GÜLER <span>forever a work in progress</span>
          </h1>
          <h2>Desktop & Full-Stack Web Developer</h2>
          <Link
            to={"mailto: furkang2k20@outlook.com"}
            target="_blank"
            className="email"
          >
            furkang2k20@outlook.com
          </Link>
          <Link
            to={"https://github.com/mystictide"}
            target="_blank"
            className="github"
          >
            <BsGithub />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
