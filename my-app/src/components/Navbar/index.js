import "./style.css";
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef} from "react";

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <header>
      <h1><img></img></h1>
      <nav>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Contact</a>
        <a href="/#">Work</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  );
};

export default Navbar;
