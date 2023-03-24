import React from "react";
import Slider from "react-slick";
import './BannerSlider.css'
function BannerSlider() {
  const data = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1208790367/photo/healthy-fresh-vegetables-in-a-crate-copy-space.jpg?s=612x612&w=0&k=20&c=DubPpo9fPEx6vR6rlQjDUCjLoZaTvwhY7RWhl3toCAA=",

      title: "Fresh Vegetables & Fruits at your doorstep",
      description: "we deliver fresh vegetable & fruits at your doorstep",
      button: "htttps://www.google.com",
    },
    {
      id: "2",
      image:"https://media.istockphoto.com/id/589417734/photo/assortment-of-the-fresh-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=IUTO4C8U0_gpyvSXZnjk5notd9o8QCfVTI744o00rto=",
      title: "Fresh Vegetables & Fruits at Your Doorstep",
      description:
        "cherries and berries.Sweet peaches and nectarines.summerbaking season is here,and I could be more Delighted.",
      button: "htttps://www.google.com",
    },
  ];

  var settings = {
    dots: "true",
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bannerSlider">
      <Slider className="bannerslider" {...settings}>
        {data.map((item) => {
          return <div className="imagecont" key={item.id}>
          
          <img src={item.image}alt='noimg'/>
          <div className="countent">
          <h1>{item.title}</h1>
          <span>{item.description}</span>
          <button>Show More</button>
          </div>
          </div>;
        })}
      </Slider>
    </div>
  );
}

export default BannerSlider;
