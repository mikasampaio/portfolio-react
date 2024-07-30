import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styles/global.ts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RepositoryProvider } from "./contexts/Repository.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RepositoryProvider>
    <RouterProvider router={router} />
    <GlobalStyle />
  </RepositoryProvider>
);
