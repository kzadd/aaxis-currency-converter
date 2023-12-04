import { memo } from 'react'
import PropTypes from 'prop-types'
import { Container, Indicative, Result, Skeleton, Toast } from './CurrencyConverter.styles'

/**
 * The CurrencyConverter result.
 */
const CurrencyConverterResult = ({ currentCurrency, error, loading, targetCurrency }) => {
  const currencyInfo = `${currentCurrency.symbol} ${currentCurrency.amount} ${currentCurrency.code} = ${targetCurrency.symbol} ${targetCurrency.amount} ${targetCurrency.code}`

  return (
    <Container className="currency-converter-result" direction="column">
      <Indicative
        className="currency-converter-result__indicative"
        component="h3"
        fontWeight="400"
        variant="subtitle1"
      >
        Tipo de cambio de las monedas
      </Indicative>

      {!error && (
        <Result
          className="currency-converter-result__result"
          component="h4"
          fontWeight="600"
          variant="h5"
        >
          {loading ? <Skeleton animation="wave" variant="rounded" /> : currencyInfo}
        </Result>
      )}

      {error && (
        <Toast severity="error">
          Lo sentimos, estamos presentando problemas con nuestro servidor.
        </Toast>
      )}
    </Container>
  )
}

const currencyPropTypes = PropTypes.shape({
  amount: PropTypes.string,
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired
}).isRequired

CurrencyConverterResult.defaultProps = {
  error: false,
  loading: false
}

CurrencyConverterResult.propTypes = {
  currentCurrency: currencyPropTypes,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  targetCurrency: currencyPropTypes
}

export default memo(CurrencyConverterResult)
