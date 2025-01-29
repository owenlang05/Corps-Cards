import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Decks from './pages/decks.jsx';
import Home from './pages/flashcards.jsx'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      error: <div/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/decks',
          element: <Decks/>
        }
      ]
    }

  ]

)

createRoot(document.getElementById('root')).render(
  <RouterProvider router ={router}/>
)
