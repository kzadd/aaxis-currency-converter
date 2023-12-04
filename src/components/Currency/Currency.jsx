import { memo } from 'react'
import { Box, InputAdornment } from '@mui/material'
import PropTypes from 'prop-types'
import { FLAGS } from './../../configs//settings/constants'
import { APP_API_FLAG_URL } from './../../configs/settings/environments'
import { checkErrorOnlyNumbers } from './../../utils/checkers'
import {
  Container,
  FlagCountry,
  FlagCountryIcon,
  InputAmount,
  InputCurrency,
  Item,
  Label,
  SelectCurrency,
  Skeleton
} from './Currency.styles'

/**
 * The Currency component.
 */
const Currency = ({
  currencies,
  currency,
  currencyType,
  error,
  label,
  loading,
  onUpdateCurrency,
  onUpdateCurrencyAmount,
  onUpdatedCurrencyType
}) => {
  const handleUpdateCurrency = (_, currency) => {
    onUpdateCurrency(currency)
  }

  const hanldeUpdateCurrencyAmount = event => {
    const { value: amount } = event.target

    if (amount === '' || checkErrorOnlyNumbers(amount)) {
      onUpdatedCurrencyType(currencyType)
      onUpdateCurrencyAmount(amount)
    }
  }

  return (
    <Container className="currency" direction="column" margin="8px 0">
      <Label className="currency__label">{label}</Label>

      <Container spacing={2}>
        <Item className="currency_current" sm={6} xs={12}>
          {!loading && (
            <FlagCountry
              alt="flag currency"
              className="currency__flag-country"
              loading="lazy"
              src={`${APP_API_FLAG_URL}/${FLAGS[currency.code]?.toLowerCase()}.svg`}
            />
          )}

          <SelectCurrency
            autoComplete={false}
            autoHighlight
            className="currency__select-currency"
            disableClearable
            disabled={error}
            getOptionLabel={option => `${option.code} - ${option.name}`}
            isOptionEqualToValue={(option, value) => option?.code === value?.code}
            onChange={handleUpdateCurrency}
            options={currencies}
            renderInput={params => (
              <>
                {loading && <Skeleton animation="wave" height={56} variant="rounded" />}

                {!loading && (
                  <InputCurrency
                    className="currency__input-currency"
                    {...params}
                    disabled={error}
                  />
                )}
              </>
            )}
            renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { flexShrink: 0, mr: 2 } }} {...props}>
                <FlagCountryIcon
                  alt="flag currency"
                  className="currency__flag-country-icon"
                  loading="lazy"
                  src={`${APP_API_FLAG_URL}/${FLAGS[option.code]?.toLowerCase()}.svg`}
                />
                {option.code} - {option.name}
              </Box>
            )}
            value={currency}
          />
        </Item>

        <Item sm={6} xs={12}>
          {loading && <Skeleton animation="wave" height={56} variant="rounded" />}

          {!loading && (
            <InputAmount
              className="currency__input-amount"
              disabled={error}
              InputProps={{
                startAdornment: (
                  <InputAdornment disableTypography={error} position="start">
                    {currency.symbol}
                  </InputAdornment>
                )
              }}
              onChange={hanldeUpdateCurrencyAmount}
              value={currency.amount || ''}
            />
          )}
        </Item>
      </Container>
    </Container>
  )
}

Currency.defaultProps = {
  currencies: [],
  error: false,
  loading: false
}

Currency.propTypes = {
  currencies: PropTypes.array,
  currency: PropTypes.shape({
    amount: PropTypes.string,
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired
  }).isRequired,
  currencyType: PropTypes.string.isRequired,
  error: PropTypes.bool,
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onUpdateCurrency: PropTypes.func.isRequired,
  onUpdateCurrencyAmount: PropTypes.func.isRequired,
  onUpdatedCurrencyType: PropTypes.func.isRequired
}

export default memo(Currency)
