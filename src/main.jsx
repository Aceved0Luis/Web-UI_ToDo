import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import { Home } from './rutes/home.jsx';
import { Details } from './rutes/details.jsx';
import { Add } from './rutes/add.jsx';
import { TodoContext } from './context.jsx';
import { useLocalStorage } from './uselocalstorage'
import { Todos } from './constants/todos.jsx';
import { useEffect, useReducer } from 'react';


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

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
}

const ToDoComponent = () => {
  const [todo, dispatch] = useReducer(reducer, useLocalStorage('datos',Todos))

   /* useEffect(()=> {
      dispatch(Todos)
    },[todo]) */

    return(
      <>
        <TodoContext.Provider value={todo}>
          <RouterProvider router={router} />
        </TodoContext.Provider>
      </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoComponent />
  </React.StrictMode>,
)