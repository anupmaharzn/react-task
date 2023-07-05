import { enviomentProvider } from '../utils/environmentProvider'

export const environmentConfig = {
  environment: enviomentProvider('REACT_APP_NODE_ENV') || 'development',
  baseUrlDev:
    enviomentProvider('REACT_APP_API_BASE_URL_DEV ') || 'http://localhost:1234',
  isDevelopment: enviomentProvider('REACT_APP_NODE_ENV') == 'development',
  isProduction: enviomentProvider('REACT_APP_NODE_ENV') == 'production',
}
