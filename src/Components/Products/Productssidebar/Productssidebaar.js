import React from 'react'
import './Productssidebar.css'
import CategrorySlider from '../CategorySlider/CategrorySlider';
import AllPRoducts from '../AllProducts/AllPRoducts';

function Productssidebar() {
  return (
    <div className='product_sidbar'>
      <CategrorySlider/>
      <AllPRoducts/>
    </div>
  )
}

export default Productssidebar
