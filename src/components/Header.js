import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="navigation">
      <Link to="/">
        {/* <img className="logo-img" src={logo} alt="logo" /> */}
      </Link>
      <div className="menu">
        <Link className="menu-item" to="/">
          Project
        </Link>{" "}
        <Link className="menu-item" to="/about">
          {" "}
          About
        </Link>{" "}
      </div>
    </nav>
  );
}

export default Header;
