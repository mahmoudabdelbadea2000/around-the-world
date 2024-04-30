import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Layout } from "../components";
import { PageNotFound } from "./PageNotFound";
import { CountryPage } from "./CountryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":countryName",
        element: <CountryPage />,
      },
    ],
  },
]);
