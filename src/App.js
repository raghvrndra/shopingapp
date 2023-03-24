import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './Pages/Products/ProductPage';
const App =()=>{

  return(
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="*" element={<div><h1>404 NOT Found</h1></div>}/>
    <Route path="/product/:prodid"element={<ProductPage/>}/>
    </Routes>
    
    </BrowserRouter>
    </div>

  )
}
export default App;
