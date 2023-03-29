import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement:
            <Layout>
                <ErrorPage />
            </Layout>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard />,
                    },
                ]
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ]
    },
]);
