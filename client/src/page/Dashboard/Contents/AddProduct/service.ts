import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance as axios } from '../../../../utils/apiUtils'
import { TProduct } from '../types'
import { history } from '../../../../routes/Routes'
export const addProduct = createAsyncThunk(
  'addProduct',
  async ({ data, toast }: { data: TProduct; toast: any }, thunkAPI?: any) => {
    try {
      const response = await axios.post('/api/products', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      const responseData = await response.data
      console.log('response', responseData)
      toast.success(responseData?.message)
      return responseData
    } catch (error: any) {
      toast.error(error?.data?.message)
      return thunkAPI.rejectWithValue(error?.data?.message)
    }
  }
)
