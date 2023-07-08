import { createSlice } from '@reduxjs/toolkit'
import { addProduct as addProductActionCreator } from './service'
import { TProductInitalState } from '../types'

const initalState: TProductInitalState = {
  loading: false,
  success: false,
  error: null,
  data: [],
}

const addProduct = createSlice({
  name: 'addProduct',
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProductActionCreator.pending, (state) => {
        state.loading = true
      })
      .addCase(addProductActionCreator.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.success = true
        state.data = action.payload
      })
      .addCase(addProductActionCreator.rejected, (state, action) => {
        state.loading = false
        state.error = (action.payload as string) || 'something went wrong'
        state.success = false
        state.data = []
      })
  },
})

export default addProduct.reducer
