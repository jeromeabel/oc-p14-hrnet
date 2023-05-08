import { NavLink, Link } from 'react-router-dom';
import logo from '/logo.svg'

const Header = () => {
  return (
    <header className="py-8 shadow-md">
      <nav className="flex justify-between container">
      <Link to="/">
          <img src={logo} alt="HRnet Logo" />
        </Link>
     <ul className="flex gap-8">
        <li><NavLink to="/create">Create</NavLink></li>
        <li><NavLink to="/view">View</NavLink></li>
     </ul> 
     </nav>
    </header>
  );
}

export default Header;
