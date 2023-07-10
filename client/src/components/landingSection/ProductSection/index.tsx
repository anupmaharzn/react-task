import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './styles.css'
import Card from '../../common/Card'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { products as productsService } from './service'
import Loader from '../../../components/common/ScreenLoader'
// Owlcarousel options
const options = {
  margin: 24,
  responsiveClass: true,
  dots: true,
  autoplay: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
}

const index: React.FC = () => {
  const dispatch = useAppDispatch()
  const { loading, data: product } = useAppSelector((state) => state.products)

  useEffect(() => {
    dispatch(productsService())
  }, [])

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mb-4">
          <span className="product-title text-center text-primary fw-normal">
            Featured Products
          </span>
        </div>
        {!loading ? (
          <OwlCarousel className="product-carousel" {...options}>
            {product?.data?.length > 0 &&
              product?.data?.map((item: any) => {
                return (
                  <Card
                    key={item.id}
                    image={item.image}
                    description={item.description}
                    name={item.title}
                    price={item.price}
                  />
                )
              })}
          </OwlCarousel>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}

export default index
