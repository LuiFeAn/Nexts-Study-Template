import axios from "axios";

export const fakeProductApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_FAKE_API_URL
});