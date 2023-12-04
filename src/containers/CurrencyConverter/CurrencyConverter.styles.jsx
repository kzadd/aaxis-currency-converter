import {
  Alert as BaseAlert,
  Grid as BaseGrid,
  Skeleton as BaseSkeleton,
  styled,
  Typography as BaseTypography
} from '@mui/material'

export const BaseContainer = styled(props => <BaseGrid container {...props} />)``

export const Card = styled(BaseContainer)`
  &.currency-converter__card {
    background: ${({ theme }) => theme.palette.brand.white};
    border-radius: 24px;
    padding: 24px 32px;
    margin: 24px 0;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`

export const Container = styled(BaseContainer)``

export const Indicative = styled(BaseTypography)`
  &.currency-converter-result__indicative {
    color: ${({ theme }) => theme.palette.brand.darkGray};
    margin-bottom: 8px;
  }
`

export const Result = styled(BaseTypography)`
  &.currency-converter-result__result {
    color: ${({ theme }) => theme.palette.brand.darkGrayText};
  }
`

export const Root = styled(BaseContainer)`
  &.currency-converter__root {
    background: ${({ theme }) => theme.palette.brand.lightGray};
    height: 100vh;
    padding: 0 16px;
  }
`

export const Skeleton = styled(BaseSkeleton)``

export const SubTitle = styled(BaseTypography)`
  &.currency-converter-heading__sub-title {
    color: ${({ theme }) => theme.palette.brand.darkGray};
  }
`

export const Title = styled(BaseTypography)`
  &.currency-converter-heading__title {
    color: ${({ theme }) => theme.palette.brand.primary};
    margin-bottom: 8px;
  }
`

export const Toast = styled(BaseAlert)``

export const Wrapper = styled(BaseContainer)`
  &.currency-converter__wrapper {
    ${({ theme }) => theme.breakpoints.up('xs')} {
      max-width: 640px;
    }
  }
`
