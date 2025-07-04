import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const router=createBrowserRouter([
  {path:"/", element:<App/>, errorElement: <NotFoundPage />, children:[
    {path:"/", element: <Home/>},
    {path:"movie/:id", element: <Movie />},
    {path:"search", element: <Search />},
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
