import { createAsyncThunk } from '@reduxjs/toolkit'
import { TRegister } from '../types'
import { axiosInstance as axios } from '../../../utils/apiUtils'
import { history } from '../../../routes/Routes'

export const register = createAsyncThunk(
  'register',
  // navigate in yestari send garda ni huntheyo :(
  async ({ data, toast }: { data: TRegister; toast: any }, thunkAPI) => {
    try {
      const response = await axios.post('/api/users', data)
      const responseData = await response.data
      toast.success(responseData?.message)
      history.push('/auth/login')
      return responseData
    } catch (error: any) {
      toast.error(error?.data?.message)
      return thunkAPI.rejectWithValue(error?.data?.message)
    }
  }
)
