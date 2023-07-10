import React from 'react'
import './styles.css'
import { Link, useLocation } from 'react-router-dom'

// get-Current-Year
const getYear = new Date().getFullYear()
const index = () => {
  const location = useLocation()
  const path = location.pathname === '/form'
  return (
    <footer
      className={
        path ? 'footer-hide' : 'container-fluid footer text-light pt-5'
      }
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title text-start mb-4">Supports</h5>
            <Link to="/" className="footer-link">
              Products
            </Link>
            <Link to="/" className="footer-link">
              Privacy Policy
            </Link>
            <Link to="/" className="footer-link">
              About Us
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title text-start mb-4">Contacts</h5>
            <p className="footer-text">
              <i className="bi bi-geo-alt-fill contact-icon"></i>
              <span className="ms-3">Kathamandu,Nepal</span>
            </p>
            <p className="footer-text">
              <i className="bi bi-telephone-fill contact-icon"></i>
              <span className="ms-3">+977 322 777 1234</span>
            </p>
            <p className="footer-text">
              <i className="bi bi-envelope-fill contact-icon"></i>
              <span className="ms-3">info@reacttask.com</span>
            </p>
            <div className="d-flex pt-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-social"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-social"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title text-start mb-4"> Openings</h5>
            <p className="footer-text">
              <span>Sunday - Saturday</span>
              <p className="mt-2">8AM - 8PM</p>
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title-last text-start mb-4">
              Download Our App
            </h5>

            <button className="footer-btn mb-2">
              <div className="d-flex align-items-center ">
                <i className="bi bi-google-play ms-2"></i>
                <div className="ms-3 text-start">
                  <p className="button-text" style={{ fontSize: '12px' }}>
                    Get it on
                  </p>
                  <p className="button-text" style={{ fontWeight: '400' }}>
                    Google Play
                  </p>
                </div>
              </div>
            </button>
            <button className="footer-btn mb-2">
              <div className="d-flex align-items-center ">
                <i className="bi bi-apple ms-2 "></i>
                <div className="ms-3 text-start">
                  <p className="button-text" style={{ fontSize: '12px' }}>
                    Download on the
                  </p>
                  <p className="button-text" style={{ fontWeight: '400' }}>
                    App Store
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-12 text-center mb-3 mb-md-0">
              <span>©{getYear} React-Task, </span>{' '}
              <span>All Right Reserved. Designed By React-Task</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default index
