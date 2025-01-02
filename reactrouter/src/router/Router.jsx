import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Detail from "../pages/Detail";
import UserDetail from "../pages/UserDetail"; // Import UserDetail
import Layout from "../pages/Layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "detail",
                element: <Detail />,
            },
            {
                path: "user/:id", // Add dynamic route
                element: <UserDetail />,
            }
        ]
    }
]);




