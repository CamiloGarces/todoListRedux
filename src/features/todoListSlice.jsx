  
import { createSlice } from '@reduxjs/toolkit'

const initialValue = { items: []}

const todoItemsSlice = createSlice({
  name: 'todoItems',
  initialState: initialValue, 
  reducers: {
    add_item: (state, action) => {
      state.items.push({item: action.payload})
    },
    remove_item: (state, action) => {
      state.items = state.items.filter(i => i.item !== action.payload)
    }

  }
})

export const { add_item, remove_item } = todoItemsSlice.actions

export const selectItems = state => state.todoItems.items

export const todoItemsReducer = todoItemsSlice.reducer