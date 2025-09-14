import {ROUTES} from "@/router/routes.js";
import {createBrowserRouter} from "react-router-dom";
import Layout from "@/Layouts/Layout.jsx";
import Login from "@/pages/Login.jsx";
import UserLayout from "@/Layouts/User/UserLayout.jsx";
import AdminLayout from "@/Layouts/Admin/AdminLayout.jsx";
import AdminLogin from "@/components/admin/AdminLogin.jsx";
import UserLogin from "@/components/users/UserLogin.jsx";
import UserDashboard from "@/components/users/UserDashboard.jsx";
import AdminDashboard from "@/components/admin/AdminDashboard.jsx";
import UserRegister from "@/components/users/UserRegister.jsx";

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
                path: ROUTES.public.login,
                element: <Login/>,
            },
        ]
    }, {
        element: <UserLayout/>,
        children: [
            {
                path: ROUTES.user.login,
                element: <UserLogin/>,
            },{
                path: ROUTES.user.register,
                element: <UserRegister/>,
            },{
                path: ROUTES.user.dashboard,
                element: <UserDashboard/>,
            },
        ]
    }, {
        element: <AdminLayout/>,
        children: [
            {
                path: ROUTES.admin.login,
                element: <AdminLogin/>,
            },
            {
                path: ROUTES.admin.dashboard,
                element: <AdminDashboard/>,
            },
        ]
    }
])