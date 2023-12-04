import axios from 'axios'
import { API_KEY, APP_API_BASE_URL } from '../configs/settings/environments'

/**
 * Gets the currencies list
 */
export const getCurrencies = () => {
  const request = axios
    .get(`${APP_API_BASE_URL}/v1/currencies?apikey=${API_KEY}`)
    .then(response => ({
      data: response.data.data,
      headers: response.headers,
      request: response.config,
      status: response.status
    }))

  return request
}

/**
 * Gets the currency converter
 */
export const getCurrencyConverter = ({ currentCurrency, targetCurrency }) => {
  const request = axios
    .get(
      `${APP_API_BASE_URL}/v1/latest?base_currency=${currentCurrency}&currencies=${targetCurrency}&apikey=${API_KEY}`
    )
    .then(response => ({
      data: response.data.data,
      headers: response.headers,
      request: response.config,
      status: response.status
    }))

  return request
}
