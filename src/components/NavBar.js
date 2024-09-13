// Navbar.js
import './NavBar.css'; // Make sure to create this CSS file

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>Jesper Bull</div>
      <ul className='nav-menu'>
        <li>Files</li>
        <li>Links</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;