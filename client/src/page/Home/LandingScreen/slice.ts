import { createSlice } from '@reduxjs/toolkit'
import { user as userActionCreator } from './service'
import { TUserInitalState } from '../types'

const initalState: TUserInitalState = {
  loading: false,
  success: false,
  error: null,
  data: {},
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
        state.error = action.error.message || 'something went wrong'
        state.success = false
        state.data = {}
      })
  },
})

export default user.reducer
