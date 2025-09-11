import React from 'react';
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {axiosClient} from "@/api/axios.js";
import {useNavigate} from "react-router-dom";
import {Loader} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card.jsx";
import {useAdminContext} from "@/context/AdminContext.jsx";
import UserApi from "@/services/UserApi.js";
import {ROUTES} from "@/router/routes.js";

const formSchema = z.object({
    email: z.string().email().min(2),
    password: z.string().min(2).max(30),
})

function UserLogin(props) {
    const {login, setAuthenticated, setToken,logout} = useAdminContext()
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "123456789"
        },
    })

    const {setError, formState: {isSubmitting}} = form

    const onSubmit = async values => {
        await login(values.email, values.password)
            .then(({ status, data }) => {
                if (status === 200) {
                    if (data.user.role !== 'user') {
                        setError('email', { message: "Access denied: not a user." });
                        UserApi.logout();
                        logout()
                    }
                    setToken(data.token);
                    setAuthenticated(true);
                    navigate(ROUTES.user.dashboard);
                }
            }).catch(({response}) => {
                setError('email', {
                    message: response.data.errors.email.join()
                })
                isSubmitting
            })

    }
    return (
        <>
            <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
                <div className="w-full justify-center max-w-sm md:max-w-3xl">
                    <Card className="overflow-hidden p-0">
                        <CardContent className="grid p-0 md:grid-cols-2">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-8">
                                    <div className="flex flex-col items-center text-center">
                                        <h1 className="text-2xl font-bold">Welcome User</h1>
                                        <p className="text-muted-foreground text-balance">
                                            Login to your account
                                        </p>
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input type={'email'} placeholder="Email" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input type={'password'} placeholder="Password" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <Button disabled={isSubmitting} type="submit">
                                        {isSubmitting && <Loader className={'animate-spin'}/>}
                                        Login
                                    </Button>
                                </form>
                            </Form>

                            <div className="bg-muted relative hidden md:block">
                                <img
                                    src="/placeholder.svg"
                                    alt="Image"
                                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default UserLogin;
