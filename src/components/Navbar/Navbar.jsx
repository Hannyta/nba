import "./Navbar.css"
import { IoSearchSharp } from "react-icons/io5";
import logo from "/assets/logo.png";
import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const Navbar = ({theme, setTheme}) => {

  const toggleMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className="navbar">
        <img src={logo} alt="logo_Run And Gun" className="logo"/>

        <ul>
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/teams">Equipos</NavLink>
        </ul>
        
        <div className="search-box">
            <input type="text" placeholder="Search"/>
            <IoSearchSharp className="search-icon"/>
        </div>
        
        {theme === "light" ? 
          <MdDarkMode onClick={toggleMode} className="toggle-icon" /> : 
          <IoMdSunny onClick={toggleMode} className="toggle-icon" />
        }

    </div>
  )
}
