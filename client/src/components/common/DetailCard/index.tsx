import React from 'react'
import './styles.css'
import { environmentConfig } from '../../../config/enviroment'
type TcardDetailProps = {
  title: string
  description: string
  price: number
  image: string
  productId: string
}
const baseUrl = environmentConfig.baseUrlDev
const index: React.FC<TcardDetailProps> = ({
  title,
  description,
  price,
  image,
  productId,
}) => {
  return (
    <div className="card-container">
      <div className="photo">
        <img src={`${baseUrl}/${image}`} alt="productImg" />
      </div>
      <div className="description">
        <div>
          <h2 className="title">{title}</h2>
          <h4 className="productid"># {productId}</h4>
          <h1 className="price">Rs. {price}</h1>
          <p className="desc">{description}</p>
        </div>
        <div className="btn-wrap">
          <button className="card-button">Add to Cart</button>
          <button className="card-button">Wishlist</button>
        </div>
      </div>
    </div>
  )
}

export default index
