import React from 'react'
// import { useAppSelector } from '../../../redux/store'
// import { Link } from 'react-router-dom'
// import * as RouteList from '../../../routes/constant'
import HeroSection from '../../../components/landingSection/HeroSection'
import ProductSection from '../../../components/landingSection/ProductSection'

// import useSwr from 'swr'
// import fetcher from '../../../utils/fetcher'

// type User = {
//   _id: string
//   email: string
//   name: string
//   createdAt: Date
//   updatedAt: Date
//   __v: number
//   session: string
//   iat: number
//   exp: number
// }

const LandingScreen = () => {
  // // const { data } = useSwr<User>('/api/me', fetcher)
  // // if (data) {
  // //   return <div>welcome {data?.name}</div>
  // // }
  // const { loading, data } = useAppSelector((state) => state.user)
  // return (
  //   <div>
  //     <div>{loading && <p>is loading</p>}</div>
  //     <div>
  //       {Object.keys(data).length > 0 ? (
  //         <p>welcome</p>
  //       ) : (
  //         <Link to={RouteList.login}>Please login</Link>
  //       )}
  //     </div>
  //   </div>
  // )

  return (
    <>
      <HeroSection />
      <ProductSection />
    </>
  )
}

export default LandingScreen
