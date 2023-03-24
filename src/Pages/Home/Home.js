import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

import BannerSlider from '../../Components/BannerSlider/BannerSlider';
import HomeCategory from '../../Components/Category/HomeCategory/HomeCategory';
import Productssidebar from '../../Components/Products/Productssidebar/Productssidebaar';
import Footer1 from './../../Components/Footer/Footer1';
import Footer2 from '../../Components/Footer/Footer2';
function Home() {
  return (
    <div className="">
      <Navbar/>
      <BannerSlider/>
      <HomeCategory/>
      <Productssidebar/>
      <Footer1/>
      <Footer2/>
    </div>
  )
}

export default Home;
