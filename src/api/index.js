import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  timeout: 20000,
});

export const getRequest = async (path) => {
  try {
    const response = await api.get(path);
    return response;
  } catch (error) {
    return error;
  }
};

export const postRequest = async (path, body) => {
  try {
    const response = await api.post(path, body);
    return response;
  } catch (error) {
    return error;
  }
};

export const updateRequest = async (path, body) => {
  try {
    const response = await api.put(path, body);
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteRequest = async (path) => {
  try {
    const response = await api.delete(path);
    return response;
  } catch (error) {
    return error;
  }
};
