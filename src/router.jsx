import { createBrowserRouter } from "react-router";
import { RootLayout } from "./pages/RootLayout";
import { App } from "./App.jsx";
import { Home } from "./pages/Home.jsx";
import { Products } from "./pages/Products.jsx";
import { ProductDetail } from "./pages/ProductDetail.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { path: "", Component: Home },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetail /> },
    ],
  },
]);

export const router2 = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { path: "", Component: Home },
      { path: "products", Component: Products },
    ],
  },
]);

export const router1 = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/h", element: <Home /> },
  { path: "/p", Component: Products },
]);
