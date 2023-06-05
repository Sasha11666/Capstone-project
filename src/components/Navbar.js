import home from '../assets/home.svg';
import about from '../assets/about.svg';
import menu from '../assets/menu.svg';
import reserve from '../assets/reserve.svg';
import order from '../assets/busket.svg';
import login from '../assets/login.svg';

const Navbar = () => {
  return (
    <nav>
        <ul className="nav-list">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Menu</a></li>
          <li><a>Reservations</a></li>
          <li><a>Order online</a></li>
          <li><a>Login</a></li>
        </ul>
        <div className='nav-icons'>
          <img className='nav-icon' src={home} alt="home" />
          <img className='nav-icon' src={about} alt="about" />
          <img className='nav-icon' src={menu} alt="menu" />
          <img className='nav-icon' src={reserve} alt="reservations" />
          <img className='nav-icon' src={order} alt="order online" />
          <img className='nav-icon' src={login} alt="login" />
        </div>
    </nav>
  )
}

export default Navbar