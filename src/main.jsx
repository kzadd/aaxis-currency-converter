import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Theme from './configs/styles/theme'
import Router from './router'

const element = document.getElementById('root')
const root = createRoot(element)

const tree = (
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline />

      <RouterProvider router={Router} />
    </ThemeProvider>
  </StrictMode>
)

root.render(tree)
