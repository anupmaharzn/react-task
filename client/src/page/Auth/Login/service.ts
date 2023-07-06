import { createAsyncThunk } from '@reduxjs/toolkit'
import { TLogin } from '../types'
import { history } from '../../../routes/Routes'
import { axiosInstance as axios } from '../../../utils/apiUtils'
import { user } from '../../../page/Home/LandingScreen/service'
export const login = createAsyncThunk(
  'login',
  async ({ data, toast }: { data: TLogin; toast: any }, thunkAPI) => {
    try {
      const response = await axios.post('/api/sessions', data)
      const responseData = await response.data
      toast.success(responseData?.message)
      await thunkAPI.dispatch(user())
      history.push('/dashboard')
      return responseData
    } catch (error: any) {
      toast.error(error?.data?.message)
      return thunkAPI.rejectWithValue(error?.data?.message)
    }
  }
)
