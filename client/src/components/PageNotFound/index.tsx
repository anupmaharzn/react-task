import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
const index: React.FC = () => {
  return (
    <>
      <div className="face">
        <div className="band">
          <div className="red"></div>
          <div className="white"></div>
          <div className="blue"></div>
        </div>
        <div className="eyes"></div>
        <div className="dimples"></div>
        <div className="mouth"></div>
      </div>
      <h1 className="title-h">Oops! Page Not Found!</h1>
      <Link className="btnpage" to={'/'}>
        Return To Home
      </Link>
    </>
  )
}

export default index
