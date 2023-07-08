import { combineReducers } from '@reduxjs/toolkit'
import register from '../page/Auth/Register/slice'
import login from '../page/Auth/Login/slice'
import user from '../page/Home/LandingScreen/slice'
import products from '../components/landingSection/ProductSection/slice'
import addProduct from '../page/Dashboard/Contents/AddProduct/slice'
import editProduct from '../page/Dashboard/Contents/EditProduct/slice'
import getordeleteProduct from '../page/Dashboard/Contents/Products/slice'
const rootReducer = combineReducers({
  register: register,
  login: login,
  user: user,
  products: products,
  addProduct: addProduct,
  editProduct: editProduct,
  getordeleteProduct: getordeleteProduct,
})

export default rootReducer
