
import NotFoundPage from "@/components/NotFoundPage";
import Layout from "@/layout/Layout";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
