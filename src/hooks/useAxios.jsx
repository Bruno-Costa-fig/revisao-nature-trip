import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3000', 
    baseURL: 'https://api-nature-trip-revisao-1.onrender.com', 
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); 

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            config.headers['Content-Type'] = 'application/json';
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;