import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Layout/Header";
import Home from "../components/Layout/Home";
import Login from "../components/Login/Login";
import MainNav from "../components/Layout/MainNav";
import HeaderNav from "../components/Layout/HeaderNav";
import Contact from "../components/Layout/Contact";
import Place from "../components/Layout/Place";
import RegistrationForm from "../components/Layout/RegistrationForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <HeaderNav></HeaderNav>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/login/crateaccount",
        element: <RegistrationForm/>
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/destination",
        element: <h2>THis is Destination Aria</h2>,
      },

      {
        path: "/blog",
        element: <h2>This Is BLOG Site</h2>,
      },
      {
        path: "/place/:id",
        element: <Place></Place>,
        loader: ({ params }) =>
          fetch(`https://travel-guru-server-site.vercel.app/card/${params.id}`),
      },
    ],
  },
]);
export default router;
