import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="header">
        <nav className="content-wrapper">
          <Link to="/" className="logo">
            FRKN
          </Link>
          <Link to="/skills" className="link">
            Skills
          </Link>
          <Link to="/projects" className="link">
            Projects
          </Link>
        </nav>
        <div className="seperator" />
      </header>
    </>
  );
};

export default Header;
