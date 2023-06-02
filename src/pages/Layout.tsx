/**
 * Layout component.
 *
 * Renders the layout structure of the application, including a header, main content area, and footer.
 *
 * @module Layout
 */

import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * The Layout component.
 *
 * @returns {JSX.Element} The rendered layout structure of the application.
 */
const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow container py-8">
        {/* <div className="container h-full"> */}
        <Outlet />
        {/* </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
