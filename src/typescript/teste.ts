import axios from "axios";

const env = (globalThis as any).process?.env;

export const api = axios.create({
  baseURL: env?.REACT_APP_API_URL || "http://localhost:3003",
});

export const setToken = (token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};