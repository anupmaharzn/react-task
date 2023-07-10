import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance as axios } from '../../../../utils/apiUtils'
import { TProduct } from '../types'
import { products } from '../../../../components/landingSection/ProductSection/service'
export const editProduct = createAsyncThunk(
  'editProduct',
  async (
    {
      productId,
      editData,
      toast,
    }: { productId: any; editData: TProduct; toast: any },
    thunkAPI?: any
  ) => {
    try {
      const response = await axios.put(`/api/products/${productId}`, editData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
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
