import React from 'react'
import './styles.css'
import ButtonLoader from '../ButtonLoader'
type TButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  requesting?: boolean
  theme: 'default' | 'primary' | 'secondary'
}

const index: React.FC<TButtonProps> = ({
  children,
  requesting,
  theme,
  type,
  onClick,
}) => {
  const buttonText = children
  return (
    <button className={`btn-${theme}`} type={type} onClick={onClick}>
      {requesting ? <ButtonLoader /> : buttonText}
    </button>
  )
}

export default index
