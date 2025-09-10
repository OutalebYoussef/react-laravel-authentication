import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {useAdminContext} from "@/context/AdminContext.jsx";

function AdminLayout(props) {
    const navigate = useNavigate()
    const {authenticated, setAuthenticated, setUser, logout} = useAdminContext()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // AdminApi.getUser()
        //     .then(({data}) => {
        //         if (data.role !== 'admin') {
        //             navigate(redirectToDashboard(data.role))
        //         }
        //         setUser(data)
        //         setAuthenticated(true)
        //     })
        //     .catch(() => {
        //         navigate(LOGIN_ADMIN_ROUTE)
        //         logout()
        //     })
        //     .finally(() => setLoading(false))
    }, [])

    // if (loading) return <Loading/>

    return (
        <>

            <Outlet/>
        </>
    );
}

export default AdminLayout;