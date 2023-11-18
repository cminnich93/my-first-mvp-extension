import { Link } from "react-router-dom"


function Navbar() {
  return (
    <nav>
      <ul>
      <li><Link to="/share">SHARE</Link></li>
        <li><Link to="/Challenge">CHALLENGE</Link></li>
        <li><Link to="/mission">MISSION</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

