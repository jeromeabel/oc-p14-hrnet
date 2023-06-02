/**
 * Footer component for displaying the footer section.
 *
 * @module Footer
 */

import { ReactComponent as LogoWhite } from '../assets/company-white.svg';

/**
 * Footer component for displaying the footer section.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container flex justify-between items-start lg:items-center">
        <div className="flex gap-4 items-center">
          <LogoWhite className="h-10 w-10" />
          <p>WEALTH HEALTH, all rights reserved</p>
        </div>
        <ul className="flex flex-col lg:flex-row min-w-fit gap-4">
          <li>Disclaimer</li>
          <li>Privacy</li>
          <li>Policy</li>
          <li>Terms of Service</li>
          <li>Cookie policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
