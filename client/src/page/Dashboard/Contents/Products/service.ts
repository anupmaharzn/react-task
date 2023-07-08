import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance as axios } from '../../../../utils/apiUtils'
import { products } from '../../../../components/landingSection/ProductSection/service'
import { history } from '../../../../routes/Routes'
export const getProduct = createAsyncThunk(
  'getProduct',
  async ({ productId }: { productId: string }, thunkAPI?: any) => {
    try {
      const response = await axios.get(`/api/products/${productId}`)
      const responseData = await response.data
      history.push(`/form/${responseData?.data?.productId}`)
      return responseData
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.data?.message)
    }
  }
)

export const deleteProduct = createAsyncThunk(
  'deleteProduct',
  async (
    { productId, toast }: { productId: string; toast: any },
    thunkAPI?: any
  ) => {
    try {
      const response = await axios.delete(`/api/products/${productId}`)
      const responseData = await response.data
      toast.success(responseData?.message)
      await thunkAPI.dispatch(products())
      return responseData
    } catch (error: any) {
      toast.error(error?.data?.message)
      return thunkAPI.rejectWithValue(error?.data?.message)
    }
  }
)
