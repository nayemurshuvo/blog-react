import { useEffect } from "react";
import api from "../api";
import { useAuth } from "./useAuth";
import axios from "axios";

const useAxios = () => {
    const { auth, setAuth } = useAuth();
    
    useEffect(() => {
        // request interceptor: config holo interceptor function, request server a jawar age token add kora hoy
        const requestInterceptor = api.interceptors.request.use(
            (config) => {
                const authToken  = auth?.authToken;
                if (authToken) {
                    config.headers.Authorization = `Bearer ${authToken}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // response interceptor: 401/403 error ache kina, auth token expired hole automatic refresh token diye call kora
        const responseInterceptor = api.interceptors.response.use(
            (response) => {                    // response object
                return response;
            },
            async (error) => {
                const originalRequest = error.config;
                if (error.response?.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    try {
                        const refreshToken = auth?.refreshToken;
                        const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`, { refreshToken });// payload a object hisebe refresh token pathano hoyeche
                        const {token} = response.data;
                        console.log("New token:", token);
                        setAuth((prev) => ({
                            ...prev,
                            authToken: token,
                        }));
                        // Retry the original request with the new token
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        return axios(originalRequest);
                    } catch (error) {
                        throw error;
                    }
                }
                return Promise.reject(error);
            }
        );

        return () => {
            api.interceptors.request.eject(requestInterceptor);
            api.interceptors.response.eject(responseInterceptor);
        };
    }, [auth.authToken]);

    return {api};
}

export default useAxios;