import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance as axios } from '../../../utils/apiUtils'

export const products = createAsyncThunk(
  'product',
  async (_: void, thunkAPI?: any) => {
    try {
      const response = await axios.get('/api/products')
      const responseData = await response.data
      return responseData
    } catch (error) {
      return thunkAPI.rejectWithValue('Request Failed')
    }
  }
)
