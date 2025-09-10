import {createContext, useContext, useEffect, useState} from "react";
import {axiosClient} from "@/api/axios.js";
import {useNavigate} from "react-router-dom";
import AdminApi from "@/services/AdminApi.js";

export const LoginStateContext=createContext({
    user:{},
    setUser:()=>{},
    authenticated:false,
    setAuthenticated:()=>{},
    login:(email,password)=>{},
    logout:()=>{},
    setToken:()=>{},
})
export default function AdminContext({children}){
    const [user, setUser] = useState({})
    const [authenticated, _setAuthenticated] = useState(window.localStorage.getItem('AUTHENTICATED')==='true')

    const login=async (email,password)=>{
        return AdminApi.login(email,password)
    }

    const setToken=(token)=>{
        window.localStorage.setItem('token',token);
    }

    const logout=()=>{
        localStorage.removeItem('token');
        setUser({})
        setAuthenticated(false)
    }

    const setAuthenticated=(isAuthenticated)=>{
        _setAuthenticated(isAuthenticated)
        window.localStorage.setItem('AUTHENTICATED',isAuthenticated)
    }

    return(
        <>
            <LoginStateContext.Provider value={{
                user,
                setUser,
                authenticated,
                setAuthenticated,
                login,
                logout,
                setToken,
            }}>
                {children}
            </LoginStateContext.Provider>
        </>
    )

}

export const useAdminContext=()=>useContext(LoginStateContext)