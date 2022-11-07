import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1>GITHUB REPOS</h1>
      <div className="navLink">
        <Link to="/home">
          HOME
        </Link>
        <Link to="/repos">
            REPOSITORIES
        </Link>
       
        <Link to="/errorpage">
            ERRORPAGE
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
