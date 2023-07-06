import { createSlice } from '@reduxjs/toolkit'
import { login as loginActionCreater } from './service'
import { TLoginInitialState } from '../types'

const initalState: TLoginInitialState = {
  loading: false,
  success: false,
  error: null,
  data: {},
}

const login = createSlice({
  name: 'login',
  initialState: initalState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginActionCreater.pending, (state) => {
        state.loading = true
      })
      .addCase(loginActionCreater.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.data = action.payload
        state.error = null
      })
      .addCase(loginActionCreater.rejected, (state, action) => {
        state.loading = false
        state.success = false
        state.error = (action.payload as string) || 'Something went wrong'
        state.data = {}
      })
  },
})

export default login.reducer
