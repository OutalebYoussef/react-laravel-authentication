import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import UserApi from "@/services/UserApi.js";
import {useUserContext} from "@/context/UserContext.jsx";
import Loading from "@/components/loading/Loading.jsx";
import {redirectToDashboard} from "@/router/index.jsx";

function UserLayout(props) {
    const navigate = useNavigate()
    const {authenticated, setAuthenticated, setUser, logout} = useUserContext()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // UserApi.getUser()
        //     .then(({data}) => {
        //         if (data.role !== 'user') {
        //             navigate(redirectToDashboard(data.role))
        //         }
        //         setUser(data)
        //         setAuthenticated(true)
        //     })
        //     .catch(() => {
        //         navigate(LOGIN_USER_ROUTE)
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

export default UserLayout;