import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>HEADER</header>
      <Outlet />
      <footer>FOOTER</footer>
    </>
  );
}

export default Layout;
