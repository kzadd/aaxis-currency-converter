export const IS_DEV_ENV = import.meta.env.MODE !== 'production'

export const {
  VITE_API_KEY: API_KEY,
  VITE_APP_API_BASE_URL: APP_API_BASE_URL,
  VITE_APP_API_FLAG_URL: APP_API_FLAG_URL,
  VITE_APP_BASE_URL: APP_BASE_URL,
  VITE_PUBLIC_URL: APP_PUBLIC_URL
} = import.meta.env
