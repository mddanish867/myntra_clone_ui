import { Link, useNavigate } from "react-router-dom";
import "./Checkout.css";
import { useState } from "react";

function Checkout() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [isCODSelected, setIsCODSelected] = useState(true);
  const [isGPaySelected, setIsGpaySelected] = useState(false);

  const handleShowMore = () => {
    if (showMore === false) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  const handleCODPaymentOption = () => {
    if (isCODSelected === true) {
      setIsCODSelected(false);
    } else {
      setIsCODSelected(true);
      setIsGpaySelected(false);
    }
  };

  const handleGPayOption = () => {
    if (isGPaySelected === false) {
      setIsGpaySelected(true);
      setIsCODSelected(false);
    } else {
      setIsGpaySelected(false);
    }
  };

  const handlePlaceOrder = () => {
    navigate("/addressverification");
  };
  return (
    <>
      <div className="payment_cart_header">
        <div className="_payment_logo_container">
          <Link to="/">
            <img
              className="payment_myntra_home"
              src="https://raw.githubusercontent.com/KG-Coding-with-Prashant-Sir/CSS_Complete_YouTube/main/Project%20Myntra%20Clone/images/myntra_logo.webp"
              alt="not found"
            ></img>
          </Link>
        </div>
        <div className="cart_payment_stepper">
          <div className="cart_payment_bag">
            <span>B A G</span>
          </div>
          <div className="cart_dot mx-1">---------- </div>
          <div className="cart_addresss mx-1"> A D D R E S S</div>
          <div className="cart_dot mx-1">---------- </div>
          <div className="cart_paymet mx-1"> P A Y M E N T</div>
        </div>
        <div className="cart_auth_payment_sec">
          <img
            className="cart_sec_payment_image"
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
          ></img>
          <span>1 0 0 % S E C U R E</span>
        </div>
      </div>

      <div className="cart_summry">
        <div className="cart_deatils_desc">
          <div className="avail_offers">
            <span className="avail_offers_tag">Available Offers</span>
            <ul className="avail_0ffers_list">
              {showMore === false ? (
                <li style={{ marginLeft: "15px" }}>
                  10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                  cards on min spend of 2.500, TCA.
                </li>
              ) : (
                <ul>
                  <li className="avail_0ffers_list">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                  <li className="avail_0ffers_list">
                    10% Instant Discount on IDFC FIRST Bank on Credit and Debit
                    cards on min spend of 2.500, TCA.
                  </li>
                </ul>
              )}
            </ul>
            <button
              className="btn default show_more_btn"
              onClick={() => handleShowMore()}
            >
              {showMore === false ? "Show More" : "Show Less"}
            </button>
          </div>

          <p style={{ fontWeight: 700, fontSize: "14px", marginLeft: "165px" }}>
            Choose Payment Mode
          </p>
          <div className="payment_option">
            <div className="payment_name_recommend">
              <button
                className="recommend_btn"
                style={ isCODSelected ? { borderLeft:'5px solid rgb(255, 63, 108)', background: '#fff',color:"rgb(255, 63, 108)",fontWeight:"600"} : {borderLeft:"none",background:"gainsboro"}}
                onClick={() => handleCODPaymentOption()}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "15px", background: 0,marginLeft:"-50px" }}
                >
                  kid_star
                </span>
                <span className="mx-1" style={{background:0}}>Recommended</span>
              </button>

              <button
                className="recommend_btn"
                onClick={() => handleGPayOption()}
                style={ isGPaySelected ? { borderLeft:'5px solid rgb(255, 63, 108)', background: '#fff',color:"rgb(255, 63, 108)",fontWeight:"600"} : {borderLeft:"none",background:"gainsboro"}}

              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "15px", background: 0 }}
                >
                  payments
                </span>
                <span className="mx-1" style={{background:0}}>Cash on Delivery (Cash/UPI)</span>

                
              </button>                        
              
            </div>

            <div className="recomend_options">
              <p>Recommended Payment Options</p>
              <div className="payment_checked">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                  <label htmlFor="html">Cash on Delivery (Cash/UPI)</label>
              </div>

              <div className="google_pay_mode">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                  <label htmlFor="html"> Google Pay</label>
              </div>
            </div>
          </div>
        </div>

        <div className="cart_total_summary">
          <div className="product_summary_cart">
            <div className="price_details">PRICE DETAILS (1 Item)</div>
            <div className="total_mrp">
              <span>Total MRP</span>
              <span style={{ marginLeft: "248px" }}>Rs. 789</span>
            </div>
            <div className="discount_on_mrp">
              <span>
                Discount on MRP{" "}
                <a href="#" className="know_more_mrp_discount">
                  Know More
                </a>
              </span>
              <span style={{ marginLeft: "131px", color: "#04966a" }}>
                -Rs. 237
              </span>
            </div>
            <div className="coupon_discount_rs">
              <span>Coupon Discount</span>
              <span
                className="material-symbols-outlined"
                style={{ color: "lightgray" }}
              >
                report
              </span>
              <span style={{ marginLeft: "191px", color: "#04966a" }}>
                -Rs.56
              </span>
            </div>
            <div className="platform_fee">
              <span>
                Plateform Fee{" "}
                <a href="#" className="know_more_platform_fee">
                  Know More
                </a>
              </span>
              <span style={{ marginLeft: "166px", color: "#04966a" }}>
                FREE
              </span>
            </div>
            <div className="shippin_fee">
              <span>
                Shipping Fee{" "}
                <a href="#" className="know_more_shipping_fee">
                  Know More
                </a>
              </span>
              <span style={{ marginLeft: "140px", color: "#04966a" }}>
                <del>Rs.79</del> FREE
              </span>
            </div>
            <hr style={{ border: "1px solid #ccc" }} />

            <div className="product_cart_total">
              <span>Total Amount </span>
              <span style={{ marginLeft: "200px", color: "black" }}>
                Rs.496
              </span>
            </div>
            <button
              className="place_order_btn"
              onClick={() => handlePlaceOrder()}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
