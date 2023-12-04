import {
  Divider as DividerBase,
  Grid as BaseGrid,
  IconButton as BaseIconButton,
  styled
} from '@mui/material'

export const BaseContainer = styled(props => <BaseGrid container {...props} />)``

export const Container = styled(BaseContainer)``

export const Divider = styled(({ margin, ...props }) => <DividerBase {...props} />)`
  &.MuiDivider-root {
    align-self: stretch;
    margin: ${props => props.margin};
  }
`

export const SwitchCurrencyButton = styled(props => <BaseIconButton {...props} />)`
  &.switch-currency__button {
    background: ${({ theme }) => theme.palette.brand.primary};
    height: 44px;
    position: absolute;
    width: 44px;

    :hover {
      background: ${({ theme }) => theme.palette.brand.primaryHover};
    }

    &.Mui-disabled {
      background: ${({ theme }) => theme.palette.brand.darkGray};
    }
  }
`

export const SwitchCurrencyIcon = styled('img')`
  &.switch-currency__icon {
    pointer-events: none;
    user-select: none;
  }
`
