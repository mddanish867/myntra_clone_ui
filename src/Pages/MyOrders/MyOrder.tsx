import { Link } from "react-router-dom";
import "./MyOrder.css";
import TopHeader2 from "../../Navigations/TopHeader2";
import Account from "../Account/Account";
function MyOrder() {    
  return (
    <>
      <div className="_my_header">
        <TopHeader2 />
      </div>

      <div className="account_header">
        <p>Account</p>
        <span>danish akhtar</span>
      </div>

      <div className="order_content">
        <div className="my_order_head">
          <div className="btn_overview">
            <Link to="/account" style={{ textDecoration: "none", color: "black" }}>
              Overview
            </Link>
          </div>

          <div className="order_return">
            <span>ORDERS</span>
            <Link to="/myorder" style={{ textDecoration: "none", color: "#14cda8",fontWeight:700}}>
              Orders & Returns
            </Link>
          </div>

          <div className="order_credits">
            <span>CREDITS</span>
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Coupons
            </Link>
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Myntra Credits
            </Link>
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              My Cash
            </Link>
          </div>

          <div className="order_account">
            <span>ACCOUNT</span>
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Profile
            </Link>
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Saved Cards
            </Link>
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Addresses
            </Link>
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Myntra Insider
            </Link>
          </div>
        </div>
        <div className="">
          
            </div>
      </div>
    </>
  );
}

export default MyOrder;
