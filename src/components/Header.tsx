/**
 * Header component for displaying the header navigation bar.
 *
 * @module Header
 */

import { NavLink, Link } from 'react-router-dom';

/**
 * Header component for displaying the header navigation bar.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = () => {
  return (
    <header className="py-6 shadow-md">
      <nav className="flex justify-between items-center container">
        <Link to="/">
          <h1 className="text-5xl font-bold">
            HR<span className="font-extralight">net</span>
          </h1>
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
