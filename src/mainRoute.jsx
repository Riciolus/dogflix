import React from "react";
import ReactDOM from "react-dom/client";
import Mainboard from "./pages/Main.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopratedPages from "./pages/Toprated.jsx";
import UpcomingPages from "./pages/Upcoming.jsx";
import DetailMovie from "./pages/DetailMovie.jsx";
import PopularPages from "./pages/Popular.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainboard />,
  },
  {
    path: "/popular",
    element: <PopularPages />,
  },
  {
    path: "/top-rated",
    element: <TopratedPages />,
  },
  {
    path: "/upcoming",
    element: <UpcomingPages />,
  },
  {
    path: "movie/:title",
    element: <DetailMovie />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
