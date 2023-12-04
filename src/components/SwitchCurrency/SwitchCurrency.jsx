import { memo } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Divider,
  SwitchCurrencyButton,
  SwitchCurrencyIcon
} from './SwitchCurrency.styles'

/**
 * The SwitchCurrency component.
 */
const SwitchCurrency = ({
  currentCurrency,
  error,
  loading,
  onSetCurrentCurrency,
  onSetTargetCurrency,
  targetCurrency
}) => {
  const handleSwitchCurrency = () => {
    onSetCurrentCurrency(targetCurrency)
    onSetTargetCurrency(currentCurrency)
  }

  return (
    <Container
      alignItems="center"
      className="switch-currency"
      direction="column"
      justifyContent="center"
    >
      <Divider margin="32px 0" />

      <SwitchCurrencyButton
        aria-label="switch-currency"
        className="switch-currency__button"
        disabled={error || loading}
        onClick={handleSwitchCurrency}
      >
        <SwitchCurrencyIcon
          alt="switch currency"
          className="switch-currency__icon"
          src="/icons/arrows.svg"
        />
      </SwitchCurrencyButton>
    </Container>
  )
}

const currencyPropTypes = PropTypes.shape({
  amount: PropTypes.string,
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired
}).isRequired

SwitchCurrency.defaultProps = {
  error: false,
  loading: false
}

SwitchCurrency.propTypes = {
  currentCurrency: currencyPropTypes,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  onSetCurrentCurrency: PropTypes.func.isRequired,
  onSetTargetCurrency: PropTypes.func.isRequired,
  targetCurrency: currencyPropTypes
}

export default memo(SwitchCurrency)
