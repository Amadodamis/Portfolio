import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


import Root from './routes/root'
import ErrorPage from './components/error-page'
import General from './components/general/General'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
