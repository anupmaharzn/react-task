import React, { useEffect } from 'react'
import './styles.css'
import Routess from './routes/Routes'
import { user as userService } from './page/Home/LandingScreen/service'
import { useAppDispatch } from './redux/store'
import CustomToast from './components/common/CustomToast'

export const App = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(userService())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <CustomToast />
      <Routess />
    </div>
  )
}
