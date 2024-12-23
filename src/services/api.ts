import axios, { AxiosInstance } from "axios";

const BASE_URL: string = "https://localhost:44319/api/";

const api: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    // headers: { "Authorization": "Bearer ..." }
});

export default api;