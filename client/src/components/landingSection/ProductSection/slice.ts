import { createSlice } from '@reduxjs/toolkit'
import { products as ProductActionCreator } from './service'
import { TProductInitalState } from './types'

const initalState: TProductInitalState = {
  loading: false,
  success: false,
  error: null,
  data: [],
}

const products = createSlice({
  name: 'product',
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ProductActionCreator.pending, (state) => {
        state.loading = true
      })
      .addCase(ProductActionCreator.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.success = true
        state.data = action.payload
      })
      .addCase(ProductActionCreator.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'something went wrong'
        state.success = false
        state.data = []
      })
  },
})

export default products.reducer
