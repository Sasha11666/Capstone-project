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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a>Menu</a>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <a>Order online</a>
          </li>
          <li>
            <a>Login</a>
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
