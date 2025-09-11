import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {ROUTES} from "@/router/routes.js";
import {useUserContext} from "@/context/UserContext.jsx";
import UserApi from "@/services/UserApi.js";
import {LogOut} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";

function UserDashboard(props) {
    const {setAuthenticated}=useUserContext()
    const navigate = useNavigate()
    const handelLogout = () => {
        UserApi.logout()
            .then((res) => {
                setAuthenticated(false)
                navigate(ROUTES.public.login)
            })
    }

    return (
        <>
            User dashboard.
            <Button variant={'outline'} onClick={handelLogout}>
                <LogOut/>
                Log out
            </Button>
        </>
    );
}

export default UserDashboard;
