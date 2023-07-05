import React from 'react'
import './styles.css'
import CartBtn from '../../common/CartBtn'
import { environmentConfig } from '../../../config/enviroment'
type cardProps = {
  image: string
  name: string
  description: string
  price: string
}
const baseUrl = environmentConfig.baseUrlDev
const index: React.FC<cardProps> = ({ image, name, description, price }) => {
  return (
    <div className="product-item border rounded">
      <div className="img-container">
        <img
          className="cardimg img-fluid flex-shrink-0 "
          src={`${baseUrl}/${image}`}
          alt="productimage"
        />
      </div>

      <div className="product-desc pt-4 pb-2 pe-3 ps-3">
        <div>
          <p className="mb-1 card-name">{name}</p>
          <p className="mb-2 card-desc">
            {' '}
            <i className="bi bi-quote"></i>
            {description}
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <span className="card-price">Rs.{price}</span>
          <CartBtn />
        </div>
      </div>
    </div>
  )
}

export default index
