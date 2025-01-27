import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'

import Home from './pages/index.jsx'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      error: <div/>,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }

  ]

)

createRoot(document.getElementById('root')).render(
  <RouterProvider router ={router}/>
)
