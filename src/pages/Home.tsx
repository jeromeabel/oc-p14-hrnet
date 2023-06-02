/**
 * Home page component.
 *
 * Renders the home page content with a welcome message and CTA buttons.
 *
 * @module Home
 */

import CTA from '../components/CTA';
import bgImg from '../assets/bg.jpg';

/**
 * The Home page component.
 *
 * @returns {JSX.Element} The rendered Home page content.
 */
const Home = () => {
  return (
    <div className="flex items-center h-full gap-16">
      <div className="w-1/2 lg:w-1/3 flex flex-col justify-center gap-4">
        <h1 className="text-4xl lg:text-5xl">Welcome</h1>
        <h2 className="text-3xl lg:text-4xl text-primary">
          HRnet is the app to manage employees records.
        </h2>
        <p className="text-xl mt-2">Select your action</p>
        <div className="flex gap-4 lg:gap-8 mt-8 lg:mt-16">
          <CTA title="Add employee" href="/add" />
          <CTA title="View employees" href="/view" />
        </div>
      </div>

      <div className="flex-1 h-full w-full">
        <img
          className="block h-full object-cover rounded-lg"
          src={bgImg}
          alt="Green plants background"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Home;
