import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import ARComponent from './ARComponent'

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/ar", element: <ARComponent/>},
    
  ])