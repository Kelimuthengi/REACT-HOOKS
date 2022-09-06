import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to={"/usestatebasics"} className="links">
          <li>Use State Basics</li>
        </Link>
        <Link to={"/usestateobjects"} className="links">
          <li>Use state Objects</li>
        </Link>

        <Link to={"/usestatearray"} className="links">
          <li>Use state arrays</li>
        </Link>

        <Link to={"/propdrilling"} className="links">
          <li>Prop Drilling</li>
        </Link>

        <Link to={"/usecontext"} className="links">
          <li>Use Context</li>
        </Link>

        <Link to={"/usereducer"} className="links">
          <li>Use reducer</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar
