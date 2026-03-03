import { Outlet, Link } from 'react-router';
export function RootLayout() {
  return (
    <>
      <nav>
        <Link to="/">App</Link>
        <Link to="/p">Products</Link>
      </nav>
      <h1>RootLayout</h1>
      <Outlet />
    </>
  );
}
