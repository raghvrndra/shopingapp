import React from 'react'
import Productcard from './../Productcard/Productcard';
import img1 from '../../../Assits/img-1.jpg'
import img2 from '../../../Assits/img-2.jpg'
import img9 from '../../../Assits/img-9.png'



import './Allproducts.css'

function AllPRoducts() {

  const products=[
    {
      id:1,
      productimage:img1,
      productname:'Products 1',
      productprice: 100,
      counttype:'1 each',
      discountprecent:10,

    },
    {
      id:2,
      productimage:img2,
      productname:'Products 2',
      productprice: 100,
      counttype:'1 each',
      discountprecent:10,

    },
    {
      id:3,
      productimage:img9,
      productname:'Products 3',
      productprice: 100,
      counttype:'1 each',
      discountprecent:10,

    }, {
      id:4,
      productimage:img1,
      productname:'Products 4',
      productprice: 100,
      counttype:'1 each',
      discountprecent:10,

    }, {
      id:5,
      productimage:img2,
      productname:'Products 5',
      productprice: 100,
      counttype:'1 each',
      discountprecent:10

    }, {
      id:6,
      productimage:img9,
      productname:'Products 6',
      productprice: 100,
      counttype:'1 each',
      discountprecent:10,

    }, {
      id:7,
      productimage:img1,
      productname:'Products 7',
      productprice: 100,
      counttype:'1 each',
      discountprecent:10,


    } ,{
      id:8,
      productimage:img2,
      productname:'Products 8',
      productprice: 100,
      counttype:'1 each',
      discountprecent:10,

    }, {
      id:8,
      productimage:img9,
      productname:'Products 9',
      productprice: 100,
      counttype:'1 each',
      discountprecent:10,

    }, {
      id:9,
      productimage:img1,
      productname:'Products 10',
      productprice: 100,
      counttype:'1 each',
      discountprecent:10,

    }, {
      id:10,
      productimage:img2,
      productname:'Products 11',
      productprice: 100,
      counttype:'1 each',
      discountprecent:10,

    }, {
      id:11,
      productimage:img9,
      productname:'Products 12',
      productprice: 100,
      counttype:'1 each',
      discountprecent:10,

    }

  ]
  return (
    <div className='allproducts'>
    <h1>All Products</h1>
    <div className='products'>
    {
      products.map((item)=>{
        return(
          <Productcard data={item} key={item.id}/>
        )
      })
    }
    </div>
    </div>
  )
}

export default AllPRoducts
