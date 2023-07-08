import { createSlice } from '@reduxjs/toolkit'
import { editProduct as editProductActionCreator } from './service'
import { TProductInitalState } from '../types'

const initalState: TProductInitalState = {
  loading: false,
  success: false,
  error: null,
  data: [],
}

const editProduct = createSlice({
  name: 'editProduct',
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editProductActionCreator.pending, (state) => {
        state.loading = true
      })
      .addCase(editProductActionCreator.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.success = true
        state.data = action.payload
      })
      .addCase(editProductActionCreator.rejected, (state, action) => {
        state.loading = false
        state.error = (action.payload as string) || 'something went wrong'
        state.success = false
        state.data = []
      })
  },
})

export default editProduct.reducer
