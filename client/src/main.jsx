import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx';
import NotFound from './pages/NotFound.jsx';

import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NotFound/>,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]  
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
