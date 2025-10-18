import axios, { AxiosRequestHeaders } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const BASE_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

export const reportsApi = axios.create({
    baseURL: `${BASE_URL}/api`,
});

reportsApi.interceptors.request.use(async (config) => {
    try {

        const stored = await AsyncStorage.getItem("auth-storage");

        if (stored) {
            const data = JSON.parse(stored);
            const token = data?.state?.jwt;

            if (token) {
                config.headers = {
                ...config.headers,
                Authorization: token
            } as AxiosRequestHeaders;
            }
        }
    } catch (error) {
        console.warn("No se pudo recuperar el token JWT:", error);
    }

    return config;
});
