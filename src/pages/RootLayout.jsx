import { Products } from "./Products";
import { Outlet, Link } from "react-router";
export function RootLayout() {
  return (
    <>
      <nav>
        <Link to="/">App(Home)</Link> <br />
        <Link to="products">products</Link>
      </nav>
      <h1>RootLayout</h1>
      <Outlet />
    </>
  );
}
