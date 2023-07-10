import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../../../redux/store'
import './styles.css'
import toast from 'react-hot-toast'
import { logout } from '../../../../page/Home/LandingScreen/service'
const index: React.FC = () => {
  const { data: userData, loading } = useAppSelector((state) => state.user)
  const [nav, setNav] = useState(false)
  const dispatch = useAppDispatch()
  const location = useLocation()
  // scroll start from top when page changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  // scroll handler
  const controlNavbar = () => {
    if (window.scrollY >= 80) {
      setNav(true)
    } else {
      setNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.scrollY])

  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className={'container-xxl position-relative p-0'}>
        <nav
          className={
            nav
              ? 'navbar navbar-expand-lg navbar-dark  px-4 px-lg-5 py-3 py-lg-0 d-lg-flex align-items-lg-center justify-content-lg-between sticky-top '
              : 'navbar navbar-expand-lg navbar-dark px-4 px-lg-5 py-3 py-lg-0 d-lg-flex align-items-lg-center justify-content-lg-between'
          }
        >
          <NavLink className="navbar-brand p-0" to="/">
            <h1 className="logo-txt">
              <span>React-Task</span>
            </h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span>
              <i className="bi bi-list"></i>
            </span>
          </button>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              <NavLink to="/" className="nav-item nav-link">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                >
                  {' '}
                  Home
                </span>
              </NavLink>

              <NavLink to="/cart" className="nav-item nav-link">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                  className="position-relative"
                >
                  {' '}
                  <i className="bi bi-bag-fill me-1"></i>
                  cart
                  <span className="cart-number">2</span>
                </span>
              </NavLink>
              {userData?.session && (
                <NavLink to="/dashboard" className="nav-item nav-link">
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    className="position-relative"
                  >
                    {' '}
                    <i className="bi bi-speedometer me-2"></i>
                    Dashboard
                  </span>
                </NavLink>
              )}
              {userData?.session && (
                <NavLink to={''} className="nav-item nav-link username">
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    className="position-relative"
                  >
                    {' '}
                    <i className="bi bi-person-circle me-2"></i>
                    {userData?.name}
                  </span>
                </NavLink>
              )}

              {loading ? (
                <NavLink className="nav-item nav-link" to={''}>
                  <span>........</span>
                </NavLink>
              ) : userData?.session ? (
                <NavLink
                  to={''}
                  className="nav-item nav-link username"
                  onClick={() => dispatch(logout({ toast }))}
                >
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                  >
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Logout
                  </span>
                </NavLink>
              ) : (
                <NavLink to="/auth/login" className="nav-item nav-link">
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                  >
                    {' '}
                    <i className="bi bi-person-fill me-2"></i>
                    Login
                  </span>
                </NavLink>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default index
