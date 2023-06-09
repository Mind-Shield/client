import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from './pages/StartPage/StartPage.jsx';
import Instructions from './pages/Instructions/Instructions';
import Remember from './pages/Remember/Remember';

const router = createBrowserRouter([
 
  {
    path:"/StartPage",
    element:<StartPage/>
  },
  {
    path:"/Instructions",
    element:<Instructions/>
  },
  {
    path:"/Remember",
    element:<Remember/>
  },


]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

