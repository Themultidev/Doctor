import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";

import Contact from './pages/Contact.jsx';
import Notfound from "./pages/Notfound.jsx";

import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter(
  [
    {path:"/", element:<App/>},
    {path:"/Contact", element:<Contact/>},
    {path:"*", element:<Notfound/>}
  ]
)
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
)
