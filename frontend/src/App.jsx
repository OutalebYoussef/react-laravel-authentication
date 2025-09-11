import {useState} from 'react'
import {Button} from "@/components/ui/button.jsx";
import {RouterProvider} from "react-router-dom";
import {router} from "@/router/index.jsx";
import AdminContext from "@/context/AdminContext.jsx";
import UserContext from "@/context/UserContext.jsx";
import {ThemeProvider} from "@/components/theme-provider.jsx";

function App() {

    return (
        <>
            <AdminContext>
                <UserContext>
                    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                        <RouterProvider router={router}/>
                    </ThemeProvider>
                </UserContext>
            </AdminContext>
        </>
    )
}

export default App
