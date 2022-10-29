import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

api.interceptors.request.use(function (config) {
    const access_token = process.env.REACT_APP_ACCESS_TOKEN;
    config.baseURL = `${config.baseURL}${access_token}`
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default api;