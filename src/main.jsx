import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Home from './templates/Home'
import CardPage from './templates/cardPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/:name",
    element: <CardPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
