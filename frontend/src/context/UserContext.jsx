import {createContext, useContext, useEffect, useState} from "react";
import {axiosClient} from "@/api/axios.js";
import {useNavigate} from "react-router-dom";
import UserApi from "@/services/UserApi.js";

export const UserStateContext=createContext({
    user:{},
    setUser:()=>{},
    authenticated:false,
    setAuthenticated:()=>{},
    login:(email,password)=>{},
    register:(name,email,password,password_confirmation)=>{},
    logout:()=>{},
    setToken:()=>{},
})
export default function UserContext({children}){
    const [user, setUser] = useState({})
    const [authenticated, _setAuthenticated] = useState(window.localStorage.getItem('AUTHENTICATED')==='true')

    const login=async (email,password)=>{
        return UserApi.login(email,password)
    }

    const register=async (name,email,password,password_confirmation)=>{
        return UserApi.register(name,email,password,password_confirmation)
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
            <UserStateContext.Provider value={{
                user,
                setUser,
                authenticated,
                setAuthenticated,
                login,
                register,
                logout,
                setToken,
            }}>
                {children}
            </UserStateContext.Provider>
        </>
    )

}

export const useUserContext=()=>useContext(UserStateContext)