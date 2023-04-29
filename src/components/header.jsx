import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
      <header id="header">
        <nav className="content-wrapper">
          <Link to="/" className="logo">
            FRKN
          </Link>
        </nav>
        <div className="seperator" />
      </header>
    </>
  );
};

export default Header;
