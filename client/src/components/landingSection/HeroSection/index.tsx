import React from 'react'
import './styles.css'
import Button from '../../common/Button'
import { motion } from 'framer-motion'
const index: React.FC = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <section className="hero-section hero-section-container">
        <div className="container ">
          <div className="row align-items-start align-items-md-center justify-content-end hero-section-container">
            <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
              <h1 className="mb-2 intro-title">Finding Your Perfect Shoes</h1>
              <div>
                <p className="mb-4 intro-text text-center text-md-left ">
                  Sneakers (US) or trainers (UK), also known by a wide variety
                  of other names, are shoes primarily designed for sports or
                  other forms of physical exercise but which are also widely
                  used for everyday casual wear.
                </p>
                <div className="intro-btn">
                  <Button type="button" theme="default">
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default index
