import axios from "axios";

const instance = axios.create({
    baseURL: "http://43.202.36.28",
});

export default instance;