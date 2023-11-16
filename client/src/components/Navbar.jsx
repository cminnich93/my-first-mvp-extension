import { Link } from "react-router-dom"


function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/mission">Mission</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/create">Create</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

