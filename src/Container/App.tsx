import "./App.css";
import Homepage from "../Components/Home/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfoun from "../Components/Notfound/Notfoun";
import Login from "../Components/Authentication/Login";
import Catalog from "../Components/Productcatalog/Catalog";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import CartDetails from "../Components/Cart/CartDetails";
import Wishlist from "../Components/Wishlist/Wishlist";
import Emptycart from "../Components/Cart/Emptycart";
import Emptywishlist from "../Components/Wishlist/Emptywishlist";
import AddressVerification from "../Components/Addresses/AddressVerification";
import Checkout from "../Components/Payment/Checkout";
import AddWishlistItems from "../Components/Wishlist/AddWishlistItems";
import OrderConfirmation from "../Components/Order/OrderConfirmation";
import MyOrder from "../Components/MyOrders/MyOrder";
import Account from "../Components/Account/Account";
import MyOrderDetails from "../Components/MyOrders/MyOrderDetails";
import MyProfile from "../Components/Profile/MyProfile";
import EditMyProfile from "../Components/Profile/EditMyProfile";
import Address from "../Components/Account/Address";
import CancelOrder from "../Components/MyOrders/CancelOrder";
import CancelOrderConfirmation from "../Components/MyOrders/CancelOrderConfirmation";

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
          <Route path="orderconfirmation" element={<OrderConfirmation/>} />
          <Route path="myorder" element={<MyOrder/>} />
          <Route path="account" element={<Account/>} />
          <Route path="myorderdetails" element={<MyOrderDetails/>} />
          <Route path="myprofile" element={<MyProfile/>} />
          <Route path="editmyprofile" element={<EditMyProfile/>} />
          <Route path="address" element={<Address/>} />
          <Route path="cancelorder" element={<CancelOrder/>} />
          <Route path="cancelorderconfirmation" element={<CancelOrderConfirmation/>} />

          <Route path="*" element={<Notfoun />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
