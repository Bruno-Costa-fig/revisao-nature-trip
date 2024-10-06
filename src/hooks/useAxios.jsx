import axios from "axios"

const useAxios = axios.create({
    baseURL: 'https://api-nature-trip-revisao.onrender.com'
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