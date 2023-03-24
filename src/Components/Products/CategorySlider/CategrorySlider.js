import React from "react";
import img1 from "../../../Assits/img-1.jpg";
import img2 from "../../../Assits/img-2.jpg";
import img3 from "../../../Assits/img-3.png";
import img4 from "../../../Assits/img-4.png";
import './Categrory.css'
function CategrorySlider() {
  const data = [
    {
      id: 1,
      Categoryimage: img1,
      categoryname: "category 1",
    },
    {
      id: 2,
      Categoryimage: img2,
      categoryname: "category 2",
    },
    {
      id: 3,
      Categoryimage: img3,
      categoryname: "category 3",
    },
    {
      id: 4,
      Categoryimage: img4,
      categoryname: "category 4",
    },
    {
      id: 5,
      Categoryimage: img1,
      categoryname: "category 5",
    },
    {
      id: 6,
      Categoryimage: img2,
      categoryname: "category 6",
    },
    {
      id: 7,
      Categoryimage: img3,
      categoryname: "category 7",
    },
    {
      id: 8,
      Categoryimage: img4,
      categoryname: "category 8",
    },
  ];
  return (
    <div className="categorysidebar">
      {data.map((item) => {
        return (
          <div className="category">
            <img src={item.Categoryimage} alt="categoryimage" />
            <h3>{item.categoryname}</h3>
            
          </div>
        );
      })}
    </div>
  );
}

export default CategrorySlider;
