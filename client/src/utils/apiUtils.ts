import axios from 'axios'
import { environmentConfig } from '../config/enviroment'

const baseURL = environmentConfig.baseUrlDev || 'http://localhost:1234'

export const axiosInstance = axios.create({
  baseURL,
})

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json'

axiosInstance.defaults.withCredentials = true

// axiosInstance.interceptors.request.use()

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response
  },
  (error: any) => {
    // const error_value = error?.response?.data?.message
    // const error_status = error?.response?.status
    // if (error_status === 409) {
    //   toast.error(error_value || 'Something Went Wrong')
    // }
    return Promise.reject(error?.response)
  }
)
