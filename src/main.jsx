import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from './pages/student/StartPage/StartPage.jsx';
import Instructions from './pages/student/Instructions/Instructions';
import Remember from './pages/student/Remember/Remember';
import Theme from './pages/student/Theme/Theme';
import School from './pages/student/School/School';
import ModalInfo from './components/Modalnfo/ModalInfo';
import Congratulations from './pages/student/Congratulations/Congratulations';
import AdminHome from './pages/admin/AdminHome/AdminHome';

const router = createBrowserRouter([
 
  //student pages
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

  //admin pages

  {
    path:"/AdminHome",
    element:<AdminHome/>
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

