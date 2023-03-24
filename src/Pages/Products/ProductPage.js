import React from "react";
import { useParams,useEffect} from "react-router-dom";
import Productcard from "./../../Components/Products/Productcard/Productcard";
import img1 from "../../Assits/img-1.jpg";
import img2 from "../../Assits/img-2.jpg";
import img3 from "../../Assits/img-3.png";

function ProductPage() {
  const { prodid } = useParams();
  const [imageset, setImageset] = React.useState(null);
  const [Productdata, setProductdata] = React.useState([]);

  const [activeimg, setActiveimg] = React.useState({});

  const getproductdatabyid = async () => {
             let temp = {
                 "Code": 200,
                 "Message": "Success",
                 "Data": [
                     {
                         "ProductId": 1,
                         "ProductName": "Product 1",
                         "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                         "ProductImage": [
                             {
                                 id: 1,
                                 image: img1
                             },
                             {
                                 id: 2,
                                 image: img2
                             },
                             {
                                 id: 3,
                                 image: img3
                             }
                         ],
                         "ProductCode": "P1",
                         "ProductCategory": "Category 1",
                         "ProductSubCategory": "Sub Category 1",
                         "ProductBrand": "Brand 1",
                         "ProductColor": "Color 1",
                         "ProductSize": "Size 1",
                         "ProductWeight": "Weight 1",
                         "ProductMaterial": "Material 1",
                         "ProductQuantity": 10,
                         "ProductUnit": "Unit 1",
                         "ProductPrice": 100,
                         "SalesPrice": 80,
                         "ProductDiscount": 20,
                         "ProductDiscountType": "Percentage",
                         "ProductTax": 20,
                         "ProductTaxType": "Percentage",
                         "ProductShippingCharge": 20,
                         "ProductShippingChargeType": "Percentage",
                         "ProductShippingTime": "1-2 days",
                         "ProductShippingTimeType": "Days",
                         "ProductShippingLocation": "Location 1",
                         "ProductShippingLocationType": "Country",
                         "ProductShippingReturnPolicy": "Return Policy 1",
                         "ProductShippingReturnPolicyType": "Days",
                         "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
                         "ProductShippingReturnPolicyDescriptionType": "Days",
                         "ProductReviews": [
                             {
                                 "ReviewId": 1,
                                 "Name": "Harshal Jain",
                                 "Email": "",
                                 "Rating": 5,
                                 "Date": "2021-08-01",
                                 "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                             },
                             {
                                 "ReviewId": 2,
                                 "Name": "Viraj",
                                 "Email": "",
                                 "Rating": 1,
                                 "Date": "2021-08-01",
                                 "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                             },
                             {
                                 "ReviewId": 3,
                                 "Name": "Harshal Jain",
                                 "Email": "",
                                 "Rating": 4,
                                 "Date": "2021-08-01",
                                 "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                             }
                         ]
                     }
                 ]
             }
             if(temp.Code === 200){
               setImageset(temp.Data[0].ProductImage)
               setProductdata(temp.Data[0])
               setActiveimg (temp.Data[0].ProductImage[0])            
             }
}
useEffect(() => {
getproductdatabyid()
},[])

  return (
    <div className="">
      <h1>Product Id Is -{prodid} </h1>
      <p>
      {
             JSON.stringify(Productdata)
      }
      </p>
    </div>
  );

}
export default ProductPage
