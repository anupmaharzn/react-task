import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance as axios } from '../../../utils/apiUtils'
import { history } from '../../../routes/Routes'
export const user = createAsyncThunk(
  'user',
  async (_: void, thunkAPI?: any) => {
    try {
      const response = await axios.get('/api/me')
      const responseData = await response.data
      return responseData
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.data?.message)
    }
  }
)

export const logout = createAsyncThunk(
  'logout',
  async ({ toast }: { toast: any }, thunkAPI?: any) => {
    try {
      const response = await axios.delete('/api/sessions')
      const responseData = await response.data
      history.push('/')
      toast.success(responseData?.message)
      return responseData
    } catch (error: any) {
      toast.error(error?.data?.message)
      return thunkAPI.rejectWithValue(error?.data?.message)
    }
  }
)
