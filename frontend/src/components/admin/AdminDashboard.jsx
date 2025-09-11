import React, {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button.jsx";
import {useAdminContext} from "@/context/AdminContext.jsx";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "@/router/routes.js";
import AdminApi from "@/services/AdminApi.js";
import {LogOut} from "lucide-react";

function AdminDashboard(props) {
    const {setAuthenticated}=useAdminContext()
    const navigate=useNavigate()

    const handelLogout = () => {
        AdminApi.logout()
            .then((res) => {
                setAuthenticated(false)
                navigate(ROUTES.admin.login)
            })
    }
    return (
        <>
            Admin dashboard.
            <Button variant={'outline'} onClick={handelLogout}>
                <LogOut/>
                Log out
            </Button>
        </>
    );
}

export default AdminDashboard;