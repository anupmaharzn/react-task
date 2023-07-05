import { combineReducers } from '@reduxjs/toolkit'
import register from '../page/Auth/Register/slice'
import login from '../page/Auth/Login/slice'
import user from '../page/Home/LandingScreen/slice'
import products from '../components/landingSection/ProductSection/slice'
const rootReducer = combineReducers({
  register: register,
  login: login,
  user: user,
  products: products,
})

export default rootReducer
