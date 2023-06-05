import logo from '../assets/logo-mono.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
        <p>Little Lemon</p>
      </div>
      <div className="doormat-links">
        <ul className="footer-links">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order online</a></li>
            <li><a>Login</a></li>
        </ul>
      </div>
      <div className="footer-contacts">
        <ul className='footer-links'>
          <li><a>Adress</a></li>
          <li><a>Phone number</a></li>
          <li><a>E-mail</a></li>
        </ul>
      </div>
      <div className="social-media">
        <ul className='footer-links'>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      
    </footer>
  )
}

export default Footer