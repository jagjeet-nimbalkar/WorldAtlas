import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          <nav className={isOpen ? "nav-open" : ""}>
            <ul>
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink to={"/country"}>Country</NavLink></li>
              <li><NavLink to={"/about"}>About</NavLink></li>
              <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
