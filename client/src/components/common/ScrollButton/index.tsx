import React, { useEffect, useState } from 'react'
import './styles.css'
const index = () => {
  const [isVisible, setIsVisible] = useState(false)
  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const listenToScroll = () => {
    const heightToHidden = 500
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    if (winScroll > heightToHidden) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => {
      window.removeEventListener('scroll', listenToScroll)
    }
  }, [])
  return (
    <div>
      {isVisible && (
        <div className="scroll-top" onClick={handleScroll}>
          <span className="scroll-icon">
            <i className="bi bi-arrow-up "></i>
          </span>
        </div>
      )}
    </div>
  )
}

export default index
