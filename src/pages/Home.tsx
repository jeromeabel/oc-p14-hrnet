/**
 * Home page component.
 *
 * Renders the home page content with a welcome message and CTA buttons.
 *
 * @module Home
 */

import CTA from '../components/CTA';
// import bgImg from '../assets/bg/bg.jpg';
// import bgImgPlaceholder from '../assets/bg/bg-placeholder2.jpg';
import bgImg from '/bg/bg.jpg';
import bgImgPlaceholder from '/bg/bg-placeholder2.jpg';

import LazyPicture from '../components/LazyPicture';

/**
 * The Home page component.
 *
 * @returns {JSX.Element} The rendered Home page content.
 */
const Home = () => {
  return (
    <div className="h-full flex flex-col-reverse lg:flex-row py-4 lg:py-8 gap-4 lg:gap-16">
      <div className="flex-1 flex flex-col justify-center gap-2 lg:gap-4">
        <h1 className="text-4xl lg:text-5xl">Welcome</h1>
        <h2 className="text-3xl lg:text-4xl">
          HRnet is the app to manage employees records.
        </h2>
        <p className="text-xl mt-2 lg:mt-4">Please, select your action</p>
        <div className="flex gap-4 lg:gap-8 mt-8 lg:mt-16">
          <CTA title="Add employee" href="/add" />
          <CTA title="View employees" href="/view" />
        </div>
      </div>
      <div className="flex-1 rounded-lg">
        <LazyPicture
          originalImage={bgImg}
          placeholderImage={bgImgPlaceholder}
        />
      </div>
    </div>
  );
};

export default Home;
