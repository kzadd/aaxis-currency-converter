import { createBrowserRouter } from 'react-router-dom'
import { APP_PUBLIC_URL } from './configs/settings/environments'
import routes from './configs/settings/routes'
import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFound'

/**
 * The Router component.
 */
const routesComponents = [
  {
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    path: routes.root
  }
]

const router = createBrowserRouter(routesComponents, { basename: APP_PUBLIC_URL })

export default router
