// request and response er majhe intercept korar jonne axios extend kora hoyeche
import axios from "axios";

//instace create of axios
const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_BASE_URL,
    // headers: {
    //     "Content-Type": "application/json",
    // },
});

export default api;
