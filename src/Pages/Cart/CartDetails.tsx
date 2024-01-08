import { Link } from "react-router-dom";
import "./Cart.css";

function CartDetails() {
  return (
    <>
      <div className="cart_header">
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="https://raw.githubusercontent.com/KG-Coding-with-Prashant-Sir/CSS_Complete_YouTube/main/Project%20Myntra%20Clone/images/myntra_logo.webp"
              alt="not found"
            ></img>
          </Link>
        </div>
        <div className="cart_address_stepper">
          <div className="car_bag">
            <span>B A G</span>
          </div>
          <div className="cart_dot mx-1">---------- </div>
          <div className="cart_address mx-1"> A D D R E S S</div>
          <div className="cart_dot mx-1">---------- </div>
          <div className="cart_paymet mx-1"> P A Y M E N T</div>
        </div>
        <div className="cart_auth_sec">
          <img
            className="cart_sec_image"
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
          ></img>
          <span>1 0 0 % S E C U R E</span>
        </div>
      </div>
      <div className="cart_summry">
        <div className="cart_deatils_desc">
          <div className="check_pin_code">
            <span>Check delivery time & services</span>

            <button className="btn default check_pin_btn">
              ENTER PIN CODE
            </button>
          </div>
        </div>
        <div className="cart_total_summary">
          <div className="check_coupon">
          <span className="material-symbols-outlined" style={{fontSize:"21px",marginTop:"48px"}}>
sell
</span>
            <div className="coupon_applied">
            
              <span className="coupon_count">1 Coupon applied</span>
              <span className="coupon_saved_rs">
                You saved additional Rs. 54
              </span>
            </div>

            <button className="btn default coupon_edit_btn">EDIT</button>
          </div>
          <hr style={{border:"1px solid #ccc"}}/>




          <div className="product_summary_cart">
<div className="price_details">PRICE DETAILS (1 Item)</div>
<div className="total_mrp">
    <span>Total MRP</span>
    <span style={{marginLeft:"248px"}}>Rs. 789</span>
</div>
<div className="discount_on_mrp">
    <span>Discount on MRP <a href="#" className="know_more_mrp_discount">Know More</a></span>
    <span style={{marginLeft:"131px",color:"#04966a"}}>-Rs. 237</span>
</div>
<div className="coupon_discount_rs">
    <span>Coupon Discount</span>
    <span className="material-symbols-outlined" style={{color:"lightgray"}}>
report
</span>
    <span style={{marginLeft:"191px",color:"#04966a"}}>-Rs.56</span>
</div>
<div className="platform_fee">
    <span>Plateform Fee <a href="#" className="know_more_platform_fee">Know More</a></span>
    <span style={{marginLeft:"166px",color:"#04966a"}}>FREE</span>
</div>
<div className="shippin_fee">
    <span>Shipping Fee <a href="#" className="know_more_shipping_fee">Know More</a></span>
    <span style={{marginLeft:"140px",color:"#04966a"}}><del>Rs.79</del> FREE</span>
</div>
<hr style={{border:"1px solid #ccc"}}/>

<div className="product_cart_total">
    <span>Total Amount </span>
    <span style={{marginLeft:"200px",color:"black"}}>Rs.496</span>
</div>
<button className="place_order_btn">PLACE ORDER</button>
          </div>




        </div>
      </div>
    </>
  );
}

export default CartDetails;
