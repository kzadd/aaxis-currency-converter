import { useEffect } from 'react'
import {
  INITIAL_CURRENT_CURRENCY,
  INITIAL_TARGET_CURRENCY
} from './../../configs/settings/constants'
import CurrencyConverterHeading from './CurrencyConverter.heading'
import CurrencyConverterResult from './CurrencyConverter.result.jsx'
import { useCurrencyConverterStore } from './CurrencyConverter.store.js'
import { Card, Root, Wrapper } from './CurrencyConverter.styles'
import Currency from '../../components/Currency'
import SwitchCurrency from '../../components/SwitchCurrency/SwitchCurrency'

/**
 * The CurrencyConverter container.
 */
const CurrencyConverter = () => {
  const [
    currencies,
    currentCurrency,
    error,
    fetchCurrencies,
    fetchCurrencyConverter,
    setCurrentCurrency,
    setTargetCurrency,
    loading,
    targetCurrency,
    updateCurrentCurrency,
    updateCurrentCurrencyAmount,
    updatedCurrencyType,
    updatedTargetCurrency,
    updatedTargetCurrencyAmount
  ] = useCurrencyConverterStore(state => [
    state.currencies,
    state.currentCurrency,
    state.error,
    state.fetchCurrencies,
    state.fetchCurrencyConverter,
    state.setCurrentCurrency,
    state.setTargetCurrency,
    state.loading,
    state.targetCurrency,
    state.updateCurrentCurrency,
    state.updateCurrentCurrencyAmount,
    state.updatedCurrencyType,
    state.updatedTargetCurrency,
    state.updatedTargetCurrencyAmount
  ])

  useEffect(() => {
    fetchCurrencies()
  }, [fetchCurrencies])

  useEffect(() => {
    setCurrentCurrency(INITIAL_CURRENT_CURRENCY)
    setTargetCurrency(INITIAL_TARGET_CURRENCY)
    fetchCurrencyConverter({
      currentCurrency: INITIAL_CURRENT_CURRENCY,
      targetCurrency: INITIAL_TARGET_CURRENCY
    })
  }, [fetchCurrencyConverter, setCurrentCurrency, setTargetCurrency])

  return (
    <Root alignItems="center" className="currency-converter__root" justifyContent="center">
      <Wrapper alignItems="center" className="currency-converter__wrapper" direction="column">
        <CurrencyConverterHeading
          subTitle="Consulte las monedas en tiempo real."
          title="Conversor de monedas"
        />

        <Card className="currency-converter__card" direction="column">
          <Currency
            currencies={currencies}
            currency={currentCurrency}
            currencyType="current"
            error={error}
            label="Moneda base"
            loading={loading}
            onUpdateCurrency={updateCurrentCurrency}
            onUpdateCurrencyAmount={updateCurrentCurrencyAmount}
            onUpdatedCurrencyType={updatedCurrencyType}
          />

          <SwitchCurrency
            currentCurrency={currentCurrency}
            error={error}
            loading={loading}
            onSetCurrentCurrency={setCurrentCurrency}
            onSetTargetCurrency={setTargetCurrency}
            targetCurrency={targetCurrency}
          />

          <Currency
            currencies={currencies}
            currency={targetCurrency}
            currencyType="target"
            error={error}
            label="Moneda de destino"
            loading={loading}
            onUpdateCurrency={updatedTargetCurrency}
            onUpdateCurrencyAmount={updatedTargetCurrencyAmount}
            onUpdatedCurrencyType={updatedCurrencyType}
          />
        </Card>

        <CurrencyConverterResult
          currentCurrency={currentCurrency}
          error={error}
          loading={loading}
          targetCurrency={targetCurrency}
        />
      </Wrapper>
    </Root>
  )
}

export default CurrencyConverter
