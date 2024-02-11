import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import SignIn from './components/SignIn/SignIn'
import ForgotPass from './components/ForgotPass/ForgotPass'
import VarificationCode from './components/VarificationCode/VarificationCode'
import NewPass from './components/NewPass/NewPass'
import VarificationPhone from './components/VarificationPhone/VarificationPhone'
import SearchBusiness from './components/SearchBusiness/SearchBusiness'
import CountrySelect from './components/CountrySelect/CountrySelect'
import Others from './components/Others/Others'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/signin',
        element: <SignIn/>
      },
      {
        path: '/forgotpass',
        element: <ForgotPass/>
      },
      {
        path: '/varificationcode',
        element: <VarificationCode/>
      },
      {
        path: '/newpass',
        element: <NewPass/>
      },
      {
        path: '/varificationphone',
        element: <VarificationPhone/>
      },
      {
        path: '/countryselect',
        element: <CountrySelect/>
      },
      {
        path: '/searchbusiness',
        element: <SearchBusiness/>
      },
      {
        path: '/others',
        element: <Others/>
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)

