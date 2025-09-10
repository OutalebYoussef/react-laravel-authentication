import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "@/router/routes.js";

function Login(props) {
    return (
        <>
            <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
                <div className="w-full flex justify-center gap-5 max-w-sm md:max-w-3xl">
                        <Link to={ROUTES.admin.login}>admin</Link>
                        <Link to={ROUTES.user.login}>user</Link>
                </div>
            </div>
        </>
    );
}

export default Login;