import React from 'react'
import { useAppSelector } from '../redux/store'
import { Navigate, Outlet } from 'react-router-dom'
import toast from 'react-hot-toast'
import Sidemenu from '../components/Sidemenu'
type TProtectedRouteProps = {
  isAdmin?: boolean
  children: React.ReactElement
}

export const ProtectedRoute: React.FC<TProtectedRouteProps> = ({
  children,
}) => {
  const { data: userData, loading } = useAppSelector((state) => state.user)
  // return isAdmin && !loading && userData?.session ? (
  //   <Outlet />
  // ) : (
  //   <Navigate to="/auth/login" replace />
  // )
  if (!loading && !userData?.session) {
    // setTimeout(() => {
    //   toast.error('Not Authorized')
    // }, 1000)
    return <Navigate to="/auth/login" />
  } else {
    return (
      <div>
        <Sidemenu />
        {children}
      </div>
    )
  }
}

export const Anonymous: React.FC = () => {
  const { data: userData, loading } = useAppSelector((state) => state.user)
  if (loading) {
    ;<p>loading</p>
  }
  return !loading && userData?.session ? <Navigate to="/" /> : <Outlet />
}
