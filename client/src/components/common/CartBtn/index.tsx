import React from 'react'
import './styles.css'
type TCartBtnProps = {
  onClick?: () => void
}
const index: React.FC<TCartBtnProps> = ({ onClick }) => {
  return (
    <button type="button" className="btn" onClick={onClick}>
      <span className="btn-icon">
        <i className="bi bi-cart-plus-fill"></i>
      </span>
    </button>
  )
}

export default index
