import axios from "axios";

export const BASE_URL = "https://mauryainfotech.com";

const axiosinstance = axios.create();

axiosinstance.defaults.baseURL= BASE_URL;
axiosinstance.defaults.withCredentials = true;

export default axiosinstance;