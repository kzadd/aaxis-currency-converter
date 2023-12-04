import {
  Autocomplete as BaseAutocomplete,
  Grid as BaseGrid,
  Skeleton as BaseSkeleton,
  styled,
  TextField as BaseTextField,
  Typography as BaseTypography
} from '@mui/material'

export const BaseContainer = styled(props => <BaseGrid container {...props} />)``

export const BaseItem = styled(props => <BaseGrid item {...props} />)`
  &.currency_current {
    align-items: center;
    display: flex;
    gap: 16px;
    justify-content: center;
  }
`

export const Container = styled(BaseContainer)``

export const FlagCountry = styled('img')`
  &.currency__flag-country {
    border-radius: 50%;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.2);
    height: 38px;
    object-fit: cover;
    pointer-events: none;
    user-select: none;
    width: 38px;
  }
`

export const FlagCountryIcon = styled('img')`
  &.currency__flag-country-icon {
    border-radius: 50%;
    height: 22px;
    object-fit: cover;
    pointer-events: none;
    user-select: none;
    width: 22px;
  }
`

export const InputAmount = styled(props => <BaseTextField {...props} />)`
  &.currency__input-amount {
    background: ${({ theme }) => theme.palette.brand.bgInput};
    border-radius: 8px;
    width: 100%;

    .MuiInputBase-root {
      border-radius: 8px;
      width: 100%;
    }

    .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  }
`

export const InputCurrency = styled(props => <BaseTextField {...props} />)`
  &.currency__input-currency {
    background: ${({ theme }) => theme.palette.brand.bgInput};
    border-radius: 8px;

    .MuiInputBase-root {
      border-radius: 8px;
    }

    .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  }
`

export const Item = styled(BaseItem)``

export const Label = styled(BaseTypography)`
  &.currency__label {
    color: ${({ theme }) => theme.palette.brand.darkGray};
    margin-bottom: 8px;
  }
`

export const SelectCurrency = styled(BaseAutocomplete)`
  &.currency__select-currency {
    width: 100%;
  }
`

export const Skeleton = styled(BaseSkeleton)`
  &.MuiSkeleton-root {
    border-radius: 8px;
  }
`
