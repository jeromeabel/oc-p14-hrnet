import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container py-8 h-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;