import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="header">
        <nav className="content-wrapper">
          <Link to="/" className="logo">
            FRKN
          </Link>
          <Link to="/skills" className="logo">
            Skills
          </Link>
          <Link to="/projects" className="logo">
            Projects
          </Link>
          <Link to="/contact" className="logo">
            Contact
          </Link>
        </nav>
        <div className="seperator" />
      </header>
    </>
  );
};

export default Header;
