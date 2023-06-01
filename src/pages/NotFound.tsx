/**
 * NotFound page component.
 *
 * Renders the NotFound page content for when a page is not found.
 *
 * @module NotFound
 */

import CTA from '../components/CTA';

/**
 * The NotFound page component.
 *
 * @returns {JSX.Element} The rendered NotFound page content.
 */
const NotFound = () => {
  return (
    <div className="h-full flex flex-col justify-center gap-10 items-center">
      <h1 className="text-5xl">
        <span className="inline-block animate-bounce">🕴️</span> Page not found
      </h1>
      <CTA title="Return to the home page" href="/" />
    </div>
  );
};

export default NotFound;
