/**
 * Home page component.
 *
 * Renders the home page content with a welcome message and CTA buttons.
 *
 * @module Home
 */

import CTA from '../components/CTA';
import bgImg from '../assets/bg.jpg';

import bg600WebP from '../assets/bg-600.webp';
import bg900WebP from '../assets/bg-900.webp';
import bg1200WebP from '../assets/bg-1200.webp';
import bg1600WebP from '../assets/bg-1600.webp';

import bg600 from '../assets/bg-600.jpg';
import bg900 from '../assets/bg-900.jpg';
import bg1200 from '../assets/bg-1200.jpg';
import bg1600 from '../assets/bg-1600.jpg';

/**
 * The Home page component.
 *
 * @returns {JSX.Element} The rendered Home page content.
 */
const Home = () => {
  return (
    <div className="flex items-center h-full gap-16">
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center gap-4">
        <h1 className="text-4xl lg:text-5xl">Welcome</h1>
        <h2 className="text-3xl lg:text-4xl">
          HRnet is the app to manage employees records.
        </h2>
        <p className="text-xl mt-2">Select your action</p>
        <div className="flex gap-4 lg:gap-8 mt-8 lg:mt-16">
          <CTA title="Add employee" href="/add" />
          <CTA title="View employees" href="/view" />
        </div>
      </div>

      <div className="hidden md:block flex-1 h-full w-full relative">
        <picture className="block h-full object-cover rounded-lg">
          <source
            type="image/webp"
            srcSet={`${bg600WebP} 600w, ${bg900WebP} 900w, ${bg1200WebP} 1200w, ${bg1600WebP} 1600w`}
          />
          <img
            className="block h-full object-cover rounded-lg"
            src={bgImg}
            srcSet={`${bg600} 600w, ${bg900} 900w, ${bg1200} 1200w, ${bg1600} 1600w`}
            sizes="50vw"
            loading="lazy"
            decoding="async"
            alt="Green plants on the ground from Francesco Gallarotti - unsplash"
          />
        </picture>

        <p className="absolute text-sm lg:text-base bottom-0 text-black w-full py-2 text-right px-4 lg:px-8 rounded-lg-br bg-opacity-80 lg:bg-opacity-60 bg-white">
          @Francesco Gallarotti - unsplash
        </p>
      </div>
    </div>
  );
};

export default Home;
