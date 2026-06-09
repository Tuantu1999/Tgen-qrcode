import axios from "axios";

const api = axios.create({
  baseURL: "",
  timeout: 10000,
});

// ========================
// REQUEST INTERCEPTOR
// ========================
api.interceptors.request.use(
  (config) => {
    console.log("[API REQUEST]", config.url);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// ========================
// RESPONSE INTERCEPTOR
// ========================
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error("[API ERROR]", error);

    return Promise.reject(error);
  },
);

export default api;
