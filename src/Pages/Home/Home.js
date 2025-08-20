import { LayersOutlined } from '@mui/icons-material'
import React from 'react'
import Layout from '../../Components/Layout/Layout'
import HomeSlider from './HomeSlider'

import BookDirectSection from './HotelInfo'
import PlanetHollywoodSection from './PlanetHollywoodSection'
import HotelInfo from './HotelInfo'
import Rooms from './Rooms'
import Staycation from './StayCation'
import StaycationComponent from './StaycationComponent'
import CafeHollywood from './CafeHollywood'
import CateringServices from './CateringServices'
import Testimonials from './Testiomonials'
import Contactus from './Contactus'
import Gallery from './Gallery'

function Home() {
  return (
    <Layout>
      <HomeSlider/>
          
      <HotelInfo/>
      <Rooms/>
      {/* <Staycation />
      <Contactus />
      <Gallery/> */}
      {/* <StaycationComponent/> */}
      {/* <CafeHollywood/> */}
      {/* <CateringServices/> */}
      {/* <Testimonials/> */}
    </Layout>
  )
}

export default Home
