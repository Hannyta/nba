import "./Navbar.css"
import { IoSearchSharp } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";

export const Navbar = () => {
  return (
    <div className="navbar">
        <img src= {logo} alt="logo_Run And Gun" className="logo"/>

        <ul>
            <li>Home</li>
            <li>Teams</li>
            <li>Players</li>
            <li>Stats</li>
        </ul>

        <div className="search-box">
            <input type="text" placeholder="Search"/>
            <IoSearchSharp className="search-icon"/>
        </div>

        <MdDarkMode  className="toggle-icon"/>
    </div>
  )
}
