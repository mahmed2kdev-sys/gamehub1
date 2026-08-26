import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: import.meta.env.VITE_RAWG_API_KEY },
});

export default {
  get: <T>(url: string) => apiClient.get<T>(url).then((res) => res.data),
};
