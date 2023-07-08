import { createSlice } from '@reduxjs/toolkit'
import {
  getProduct as getProductActionCreator,
  deleteProduct as deleteProductActionCreator,
} from './service'
import { TProductInitalState } from '../types'

const initalState: TProductInitalState = {
  loading: false,
  success: false,
  error: null,
  data: [],
}

const getordeleteProduct = createSlice({
  name: 'getordeleteProduct',
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductActionCreator.pending, (state) => {
        state.loading = true
      })
      .addCase(getProductActionCreator.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.success = true
        state.data = action.payload
      })
      .addCase(getProductActionCreator.rejected, (state, action) => {
        state.loading = false
        state.error = (action.payload as string) || 'something went wrong'
        state.success = false
        state.data = []
      })
      .addCase(deleteProductActionCreator.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteProductActionCreator.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.success = true
        state.data = action.payload
      })
      .addCase(deleteProductActionCreator.rejected, (state, action) => {
        state.loading = false
        state.error = (action.payload as string) || 'something went wrong'
        state.success = false
        state.data = initalState.data
      })
  },
})

export default getordeleteProduct.reducer
