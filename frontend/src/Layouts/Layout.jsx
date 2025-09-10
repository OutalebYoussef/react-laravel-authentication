import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";

function Layout(props) {

    return (
        <>
            <Outlet/>
        </>
    );
}

export default Layout;