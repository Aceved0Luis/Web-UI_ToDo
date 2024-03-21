import { createSlice } from '@reduxjs/toolkit'

const initialState = []

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
      return  state.filter(todo => todo.id !== action.payload)
    },
    deleteAll: (state) => {
      return state.splice()
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, detail, deleteAll } = todoSlice.actions

export default todoSlice.reducer
