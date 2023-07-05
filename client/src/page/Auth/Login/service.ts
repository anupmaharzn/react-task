import { createAsyncThunk } from '@reduxjs/toolkit'
import { TLogin } from '../types'
import { axiosInstance as axios } from '../../../utils/apiUtils'
import { user } from '../../../page/Home/LandingScreen/service'
export const login = createAsyncThunk(
  'login',
  async (data: TLogin, thunkAPI) => {
    try {
      const response = await axios.post('/api/sessions', data)
      const responseData = await response.data
      await thunkAPI.dispatch(user())
      return responseData
    } catch (error) {
      return thunkAPI.rejectWithValue('Request fail')
    }
  }
)
