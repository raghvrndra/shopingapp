import "../HomeCategriy.css";
import img1 from "../../../Assits/img-1.jpg";
import img2 from "../../../Assits/img-2.jpg";
import img3 from "../../../Assits/img-3.png";
import img4 from "../../../Assits/img-4.png";

function HomeCategory() {
  return (
    <div className="homecategories">
      <div className="container">
        <img src={img1} alt="img1" />
        <div className="content">
          <h1>Fruits At Your Doorstep</h1>
          <p>Shop Fruits</p>
        </div>
      </div>
      <div className="container">
        <img src={img2} alt="img2" />
        <div className="content">
          <h1> Vegetables At Your Doorstep</h1>
          <p>Shop Vegetables</p>
        </div>
      </div>
      <div className="container">
        <img src={img3} alt="img3" />
        <div className="content">
          <h1>Fast Delivery </h1>
          <p>Shop Vegetables & Fruits</p>
        </div>
      </div>
      <div className="container">
        <img src={img4} alt="img4" />
        <div className="content">
          <h1>Grocery in best Price</h1>
          <p>Fresh Friuts& Vegetables</p>
        </div>
      </div>
    </div>
  );
}

export default HomeCategory;
