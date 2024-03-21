import { Todos } from "../constants/todos";
import { createSlice } from '@reduxjs/toolkit'

const initialState = [Todos]

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state) => {
      return [...state,
        {
            title: action.payload.name,
            description: action.payload.description,
            time: action.payload.date
        }
    ]
    },
    detail: (state, action) => {
      return  state.filter(todo => todo.id !== action.payload)
    },
    deleteAll: (state) => {
      console.log('deleteAll')
      return state.splice()
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, detail, deleteAll } = todoSlice.actions

export default todoSlice.reducer
