import { createSlice } from '@reduxjs/toolkit'
import { valueInit } from '../constants/todos-init'

const initialState = valueInit

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      return [...state,
        {
            title: action.payload.title,
            description: action.payload.description,
            time: action.payload.time
        }
    ]
    },
    detail: (state, action) => {
      return state.filter(todo => todo.title === action.payload.id)
    },
    deleteAll: (state) => {
      return state.splice()
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, detail, deleteAll } = todoSlice.actions

export default todoSlice.reducer
