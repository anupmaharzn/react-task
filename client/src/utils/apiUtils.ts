import axios from 'axios'
import { environmentConfig } from '../config/enviroment'

const baseURL = environmentConfig.baseUrlDev || 'http://localhost:1234'

export const axiosInstance = axios.create({
  baseURL,
})

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json'

axiosInstance.defaults.withCredentials = true

// axiosInstance.interceptors.request.use()
// axiosInstance.interceptors.response.use()
