import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import { Home } from './rutes/home.jsx';
import { Details } from './rutes/details.jsx';
import { Add } from './rutes/add.jsx';
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/details/:id',
        element: <Details />,
      },
      {
        path: '/add',
        element: <Add />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)