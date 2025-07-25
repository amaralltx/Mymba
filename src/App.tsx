import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./containers/layout/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ExplorePage from "./pages/ExplorePage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/explore", element: <ExplorePage /> },
        { path: "/species", element: <div>Espécies</div> },
        { path: "/about", element: <div>Sobre</div> },
        { path: "/discover", element: <div>Conhecer o passado para proteger o futuro.</div> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  {
    basename: "/Mymba/",
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
