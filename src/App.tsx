import "./App.css";
import Homepage from "./Pages/Home/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfoun from "./Pages/Notfound/Notfoun";
import Login from "./Authentication/Login";
import Catalog from "./Pages/Productcatalog/Catalog";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import CartDetails from "./Pages/Cart/CartDetails";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Emptycart from "./Pages/Cart/Emptycart";
import Emptywishlist from "./Pages/Wishlist/Emptywishlist";
import AddressVerification from "./Pages/Addresses/AddressVerification";
import CustomePopUps from "./Pages/Popups/CustomePopUps";
import Checkout from "./Pages/Payment/Checkout";
import AddWishlistItems from "./Pages/Wishlist/AddWishlistItems";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="productdetails" element={<ProductDetails />} />
          <Route path="cartdetails" element={<CartDetails />} />
          <Route path="emptycart" element={<Emptycart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="emptywishlist" element={<Emptywishlist />} />
          <Route path="addressverification" element={<AddressVerification/>} />
          <Route path="checkout" element={<Checkout/>} />
          <Route path="addwishlistitems" element={<AddWishlistItems/>} />
          <Route path="*" element={<Notfoun />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
