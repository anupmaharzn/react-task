import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance as axios } from '../../../../utils/apiUtils'
import { TProduct } from '../types'
import { products } from '../../../../components/landingSection/ProductSection/service'
export const addProduct = createAsyncThunk(
  'addProduct',
  async (
    { addData, toast }: { addData: TProduct; toast: any },
    thunkAPI?: any
  ) => {
    try {
      const response = await axios.post('/api/products', addData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      const responseData = await response.data
      await thunkAPI.dispatch(products())
      toast.success(responseData?.message)
      return responseData
    } catch (error: any) {
      toast.error(error?.data?.message)
      return thunkAPI.rejectWithValue(error?.data?.message)
    }
  }
)
