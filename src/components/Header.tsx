/**
 * Header component for displaying the header navigation bar.
 *
 * @module Header
 */

import { NavLink, Link } from 'react-router-dom';
import logo from '/logo.svg';

/**
 * Header component for displaying the header navigation bar.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = () => {
  return (
    <header className="py-8 shadow-md">
      <nav className="flex justify-between container">
        <Link to="/">
          <img src={logo} alt="HRnet Logo" width={117} height={29} />
        </Link>
        <ul className="flex gap-8 text-xl">
          <li>
            <NavLink
              to="/add"
              className={'underline-offset-8 [&.active]:underline'}
            >
              Add
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/view"
              className={'underline-offset-8 [&.active]:underline'}
            >
              View
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
