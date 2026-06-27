import axios from "axios";

const axoisInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BURL}`,
    headers: {
        "Accept-language": "en"
    }
});

export default axoisInstance;