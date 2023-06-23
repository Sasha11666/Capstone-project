import home from "../assets/home.svg";
import about from "../assets/about.svg";
import menu from "../assets/menu.svg";
import reserve from "../assets/reserve.svg";
import order from "../assets/busket.svg";
import login from "../assets/login.svg";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <img src={Logo} alt="logo" />
      <nav>
        <ul className="nav-list">
          <li>
            <Link aria-label="To Home" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link aria-label="To About" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="#">Menu</Link>
          </li>
          <li>
            <Link aria-label="To Booking" to="/booking">
              Booking
            </Link>
          </li>
          <li>
            <Link to="#">Order online</Link>
          </li>
          <li>
            <Link to="#">Login</Link>
          </li>
        </ul>
        <div className="nav-icons">
          <img className="nav-icon" src={home} alt="home" />
          <img className="nav-icon" src={about} alt="about" />
          <img className="nav-icon" src={menu} alt="menu" />
          <img className="nav-icon" src={reserve} alt="reservations" />
          <img className="nav-icon" src={order} alt="order online" />
          <img className="nav-icon" src={login} alt="login" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
