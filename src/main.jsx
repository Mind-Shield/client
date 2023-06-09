import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from './pages/StartPage/StartPage.jsx';
import Instructions from './pages/Instructions/Instructions';
import Remember from './pages/Remember/Remember';
import Theme from './pages/Theme/Theme';
import School from './pages/School/School';
import ModalInfo from './components/Modalnfo/ModalInfo';
import Congratulations from './pages/Congratulations/Congratulations';

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
  {
    path:"/Theme",
    element:<Theme/>
  },
  // {
  //   path:"/Friends",
  //   element:<Friends/>
  // },
  // {
  //   path:"/Family",
  //   element:<Family/>
  // },
  {
    path:"/School",
    element:<School/>
  },
  // {
  //   path:"/Home",
  //   element:<Home/>
  // },
  {
    path:"/ModalInfo",
    element:<ModalInfo/>
  },
  {
    path:"/Congratulations",
    element:<Congratulations/>
  },


]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

