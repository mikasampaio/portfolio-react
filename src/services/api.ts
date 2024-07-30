import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
});

export const apiReadme = axios.create({
  baseURL: "https://api.github.com/repos/mikasampaio",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    Accept: "application/vnd.github.v3.raw",
  },
});
