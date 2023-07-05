import React from 'react'
import './styles.css'
type TButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  theme: 'default' | 'primary' | 'secondary'
}

const index: React.FC<TButtonProps> = ({ children, theme, type, onClick }) => {
  return (
    <button className={`btn-${theme}`} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default index
