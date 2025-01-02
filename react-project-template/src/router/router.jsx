import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import CommonLayout from "../layouts/CommonLayout";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/payment",
        element: <PaymentHistory />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <div>Your element name</div>,
  },
]);

export default router;
