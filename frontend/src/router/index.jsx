import {ROUTES} from "@/router/routes.js";
import {createBrowserRouter} from "react-router-dom";
import Layout from "@/Layouts/Layout.jsx";
import Login from "@/pages/Login.jsx";
import UserLayout from "@/Layouts/User/UserLayout.jsx";
import AdminLayout from "@/Layouts/Admin/AdminLayout.jsx";

export const redirectToDashboard = (roleType) => {
    switch (roleType) {
        case 'user':
            return (ROUTES.user.dashboard);
        case 'admin':
            return (ROUTES.admin.dashboard);
    }
}

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "*",
                element: <p>Not Found.</p>,
            }, {
                path: "/",
                element: <Login/>,
            },
        ]
    }, {
        element: <UserLayout/>,
        children: [
            {
                path: ROUTES.user.login,
                element: <Login/>,
            },
        ]
    }, {
        element: <AdminLayout/>,
        children: [
            {
                path: ROUTES.admin.login,
                element: <Login/>,
            },
        ]
    }
])