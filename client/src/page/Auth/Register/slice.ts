import { createSlice } from '@reduxjs/toolkit'
import { TRegisterInitialState } from '../types'
import { register } from './service'
const initalState: TRegisterInitialState = {
  loading: false,
  success: false,
  error: null,
  data: {},
}

const RegisterSlice = createSlice({
  name: 'register',
  initialState: initalState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true
      })
      .addCase(register.fulfilled, (state, action: any) => {
        state.loading = false
        state.data = action.payload
        state.error = null
      })
      .addCase(register.rejected, (state, action: any) => {
        state.loading = false
        state.success = false
        state.error = action.payload || 'Something went wrong'
        state.data = {}
      })
  },
})
//action creator
export const { clearError } = RegisterSlice.actions

export default RegisterSlice.reducer
