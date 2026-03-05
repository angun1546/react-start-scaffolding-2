import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./router";
// 컴포넌트의 주소를 미리 경로지정

import { RouterProvider } from "react-router/dom";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
