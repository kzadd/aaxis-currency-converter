import { memo } from 'react'
import PropTypes from 'prop-types'
import { SubTitle, Title } from './CurrencyConverter.styles'

/**
 * The CurrencyConverter heading.
 */
const CurrencyConverterHeading = ({ subTitle, title }) => (
  <>
    <Title
      className="currency-converter-heading__title"
      component="h1"
      fontWeight="600"
      variant="h4"
    >
      {title}
    </Title>

    <SubTitle
      className="currency-converter-heading__sub-title"
      component="h2"
      fontWeight="400"
      variant="subtitle1"
    >
      {subTitle}
    </SubTitle>
  </>
)

CurrencyConverterHeading.propTypes = {
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default memo(CurrencyConverterHeading)
