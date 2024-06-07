import axios from "axios";
import i18n from "./i18n";

axios.defaults.baseURL = "https://voha.leetcode.uz/api";

axios.interceptors.request.use(
  (config) => {
    config.headers["Accept-Language"] = i18n.global.locale.value;
    // config.headers["access-control-allow-origin"] = "*";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
