import React, { Suspense } from 'react'
import { BrowserHistory, createBrowserHistory } from 'history'
import { Router, Routes, Route } from 'react-router-dom'
import Login from '../page/Auth/Login'
import Register from '../page/Auth/Register'
import { AnimatePresence } from 'framer-motion'
import LandingScreen from '../page/Home/LandingScreen'
import Navbar from '../components/common/Partials/Navbar'
import Footer from '../components/common/Partials/Footer'
import ScrollButton from '../components/common/ScrollButton'
import * as RouteList from './constant'
import { ProtectedRoute, Anonymous } from './ProtectedRoute'
import PageNotFound from '../components/PageNotFound'
const Dashboard = React.lazy(() => import('../components/Dashboard'))
import Loader from '../components/common/ScreenLoader'

type TRouterProps = {
  basename?: string
  children: React.ReactNode
  history: BrowserHistory
}

export const history = createBrowserHistory()

const CustomRouter = ({ basename, children, history }: TRouterProps) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  })

  React.useLayoutEffect(() => history.listen(setState), [history])

  return (
    <Router
      basename={basename}
      location={state.location}
      navigator={history}
      navigationType={state.action}
    >
      {children}
    </Router>
  )
}
const Routess = () => {
  return (
    <CustomRouter history={history}>
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path={RouteList.home} element={<LandingScreen />} />
          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route
              path={RouteList.dashboard}
              element={
                <Suspense fallback={<Loader />}>
                  <Dashboard />
                </Suspense>
              }
            />
          </Route>
          <Route element={<Anonymous isAdmin={false} />}>
            <Route path={RouteList.login} element={<Login />} />
            <Route path={RouteList.register} element={<Register />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <ScrollButton />
    </CustomRouter>
  )
}

export default Routess
