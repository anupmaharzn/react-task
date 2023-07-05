import { createAsyncThunk } from '@reduxjs/toolkit'
import { TRegister } from '../types'
import { axiosInstance as axios } from '../../../utils/apiUtils'

export const register = createAsyncThunk(
  'register',
  async (data: TRegister, thunkAPI) => {
    try {
      const response = await axios.post('/api/users', data)
      const responseData = await response.data
      return responseData
    } catch (error) {
      return thunkAPI.rejectWithValue('Request Failed')
    }
  }
)
