import axios from "axios"

const useAxios = axios.create({
    baseURL: 'http://localhost:3000'
})

useAxios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')

        config.headers.Authorization = token
        config.headers["Content-Type"] = 'application/json'

        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default useAxios