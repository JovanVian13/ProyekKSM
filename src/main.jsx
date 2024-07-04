import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Jovan from './pages/jovan'
import Karina from './pages/karina'

const route = createBrowserRouter([
  { 
    path: '/', 
    element: <Dashboard /> },
  { 
    path: '/jovan', 
    element: <Jovan /> },
  { 
    path: '/karina', 
    element: <Karina /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={route}/>
  </React.StrictMode>,
)
