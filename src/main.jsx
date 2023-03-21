import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


import Root from './routes/root'
import ErrorPage from './components/error-page'
import General from './components/General'
import Developer from './components/Developer'
import Cheff from './components/Cheff'

const router = createBrowserRouter([
  {
    path: "/",
    element: <General />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/developer",
        element: <Developer />,
      },
      {
        path: "/cheff",
        element: <Cheff />,
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
