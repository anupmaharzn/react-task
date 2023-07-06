import { createSlice } from '@reduxjs/toolkit'
import {
  user as userActionCreator,
  logout as LogoutActionCreator,
} from './service'
import { TUserInitalState } from '../types'

const initalState: TUserInitalState = {
  loading: false,
  success: false,
  error: null,
  data: undefined,
}

const user = createSlice({
  name: 'user',
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userActionCreator.pending, (state) => {
        state.loading = true
      })
      .addCase(userActionCreator.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.success = true
        state.data = action.payload
      })
      .addCase(userActionCreator.rejected, (state, action) => {
        state.loading = false
        state.error = (action.payload as string) || 'something went wrong'
        state.success = false
        state.data = {}
      })
      .addCase(LogoutActionCreator.pending, (state) => {
        state.loading = true
      })
      .addCase(LogoutActionCreator.fulfilled, (state) => {
        state.loading = false
        state.error = null
        state.success = true
        state.data = undefined
      })
      .addCase(LogoutActionCreator.rejected, (state, action) => {
        state.loading = false
        state.error = (action.payload as string) || 'something went wrong'
        state.success = false
        state.data = initalState.data
      })
  },
})

export default user.reducer
