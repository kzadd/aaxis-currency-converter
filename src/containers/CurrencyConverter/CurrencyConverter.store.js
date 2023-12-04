import { create } from 'zustand'
import { getCurrencies, getCurrencyConverter } from './../../services/currencies'

export const useCurrencyConverterStore = create((set, get) => {
  const initialState = {
    currencies: [],
    currencyType: 'current',
    currentCurrency: { amount: '1', code: '', name: '', symbol: '' },
    error: false,
    loading: false,
    targetCurrency: { amount: '', code: '', name: '', symbol: '' }
  }

  return {
    ...initialState,
    fetchCurrencies: async () => {
      set({ loading: true })

      try {
        const { data } = await getCurrencies()

        const currencies = Object.values(data)?.map(currency => ({
          amount: '1',
          code: currency.code,
          name: currency.name,
          symbol: currency.symbol
        }))

        return set({ currencies })
      } catch (err) {
        console.error({ err })

        return set({ error: true })
      } finally {
        set({ loading: false })
      }
    },
    fetchCurrencyConverter: async ({ currentCurrency, targetCurrency }) => {
      try {
        const { data } = await getCurrencyConverter({
          currentCurrency: currentCurrency.code,
          targetCurrency: targetCurrency.code
        })

        const result = currentCurrency.amount
          ? Number(currentCurrency.amount) * data[targetCurrency.code]
          : ''

        const isCurrent = get().currencyType === 'current'
        const isTarget = get().currencyType === 'target'

        return set({
          currentCurrency: isCurrent
            ? { ...currentCurrency }
            : { ...targetCurrency, amount: result?.toFixed(2)?.replace('.', ',') },
          targetCurrency: isTarget
            ? { ...currentCurrency }
            : { ...targetCurrency, amount: result?.toFixed(2)?.replace('.', ',') }
        })
      } catch (err) {
        console.error({ err })

        return set({ error: true })
      }
    },
    setCurrentCurrency: currency => set({ currentCurrency: currency }),
    setTargetCurrency: currency => set({ targetCurrency: currency }),
    updateCurrentCurrency: currency => {
      get().setCurrentCurrency(currency)

      const targetCurrency = get().targetCurrency

      return get().fetchCurrencyConverter({ currentCurrency: currency, targetCurrency })
    },
    updateCurrentCurrencyAmount: amount => {
      set(state => ({ currentCurrency: { ...state.currentCurrency, amount } }))

      const currentCurrency = get().currentCurrency
      const targetCurrency = get().targetCurrency

      return get().fetchCurrencyConverter({ currentCurrency, targetCurrency })
    },
    updatedCurrencyType: currencyType => set({ currencyType }),
    updatedTargetCurrency: currency => {
      get().setTargetCurrency(currency)

      const currentCurrency = get().currentCurrency

      return get().fetchCurrencyConverter({
        currentCurrency,
        targetCurrency: currency
      })
    },
    updatedTargetCurrencyAmount: amount => {
      set(state => ({ targetCurrency: { ...state.targetCurrency, amount } }))

      const currentCurrency = get().currentCurrency
      const targetCurrency = get().targetCurrency

      return get().fetchCurrencyConverter({
        currentCurrency: targetCurrency,
        targetCurrency: currentCurrency
      })
    }
  }
})
