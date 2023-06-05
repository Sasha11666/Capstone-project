import Navbar from './Navbar';
import Logo from '../assets/Logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <img src={Logo}/>
      <Navbar/>
    </header>
  )
}

export default Header



