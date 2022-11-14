import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1>GITHUB REPOS</h1>
      <div className="navLink">
        <button className="navButton">
          <Link to="/home">HOME</Link>
        </button>
        <button className="navButton">
          <Link to="/repos">REPOSITORIES</Link>
        </button>
        <button className="navButton">
          <Link to="/errorpage">ERRORPAGE</Link>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
