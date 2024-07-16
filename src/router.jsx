import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import AR from './AR'

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/ar", element: <AR/>},
    
  ])