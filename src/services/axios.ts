import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { getAccessToken, setAccessToken } from './tokenManages';

const API_URL = import.meta.env.VITE_BASE_URL;

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean; // Optional _retry property
}
//console.log('host',API_URL);


const API  = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
});

// Request Interceptor
API.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAccessToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error: AxiosError) => {
  return Promise.reject(error);
});

// Response Interceptor
API.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const config = error.config as CustomAxiosRequestConfig;
    if (error.response?.status === 401 && config && !config._retry) {
      config._retry = true;

      // Refresh the access token
      try {
        const response = await axios.post('/token', {}, { withCredentials: true });
        const { accessToken } = response.data;
        setAccessToken(accessToken);

        // Retry the original request
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        return API(config);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default API