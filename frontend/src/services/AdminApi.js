import {axiosClient} from "@/api/axios.js";

const AdminApi = {
    login: async (email, password) => {
        return await axiosClient.post('/login/admin', {email, password})
    },
    logout: async () => {
        return await axiosClient.post('/logout')
    },
    getUser: async () => {
        return await axiosClient.get('/me')
    },
}
export default AdminApi
