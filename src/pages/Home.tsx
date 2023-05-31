/**
 * Home page component.
 *
 * Renders the home page content with a welcome message and CTA buttons.
 *
 * @module Home
 */

import CTA from '../components/CTA';
import companyImg from '/company.svg';

/**
 * The Home page component.
 *
 * @returns {JSX.Element} The rendered Home page content.
 */
const Home = () => {
  return (
    <div className="h-full flex">
      <div>
        <h1>Welcome</h1>
        <p className="text-3xl py-4">
          HRnet is used in our compagny to manage Employees records.
        </p>
        <div className="flex gap-8 py-8">
          <CTA title="Add employee" href="/add" />
          <CTA title="View employees" href="/view" />
        </div>
      </div>

      <img className="" src={companyImg} alt="Wealth Health Logo" />
    </div>
  );
};

export default Home;
