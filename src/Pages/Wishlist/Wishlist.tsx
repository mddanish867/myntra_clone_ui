import { Link } from "react-router-dom";
import Footer from "../../Layout/Footer/Footer";
import TopHeader2 from "../../Navigations/TopHeader2";
import "./Wishlist.css";

function Wishlist() {
  return (
    <>
      <div className="header">
        <TopHeader2 />
      </div>
      <div className="wishlist_heading">
          <span>
            <b>My Wishlist</b> 2 items
          </span>
        </div>
      <div className="wishlist_main">
      <div className="wishlist_header">
        
        <div className="wishlist_product">
          <div className="wishlist_image_btn">

          <img src="https://github.com/KG-Coding-with-Prashant-Sir/CSS_Complete_YouTube/blob/main/Project%20Myntra%20Clone/images/categories/1.jpg?raw=true">

          </img>
          <div className="wishlist_cancel_btn">
          <span className="material-symbols-outlined">close</span>

          </div>

              
            </div>
           
          <div className="wishlist_product_price">
              <span style={{ fontSize: "16px", color: "black",marginLeft:"10px" }}>
                FBAR Typography Printed...
              </span>                           
              <div className="wishlist_price_product">
                <span style={{ fontSize: "14px", fontWeight: "700" }}>
                  Rs 552{" "}
                </span>
                <del className="mx-1" style={{ fontSize: "14px" }}>
                  Rs.709
                </del>
                <span
                  className="mx-1"
                  style={{ fontSize: "14px", color: "rgb(236 71 90)" }}
                >
                  30% OFF
                </span>
              </div>              
            </div>
           <div className="btn_move_to_bag">
            <Link className="btn_mvto_bag_link" to={"/cart"}>MOVE TO BAG</Link>
           </div>
        </div>
      </div>
      <div className="wishlist_header">
        
        <div className="wishlist_product">
          <div className="wishlist_image_btn">

          <img src="https://github.com/KG-Coding-with-Prashant-Sir/CSS_Complete_YouTube/blob/main/Project%20Myntra%20Clone/images/categories/1.jpg?raw=true">

          </img>
          <div className="wishlist_cancel_btn">
          <span className="material-symbols-outlined">close</span>

          </div>

              
            </div>
           
          <div className="wishlist_product_price">
              <span style={{ fontSize: "16px", color: "black",marginLeft:"10px" }}>
                FBAR Typography Printed...
              </span>                           
              <div className="wishlist_price_product">
                <span style={{ fontSize: "14px", fontWeight: "700" }}>
                  Rs 552{" "}
                </span>
                <del className="mx-1" style={{ fontSize: "14px" }}>
                  Rs.709
                </del>
                <span
                  className="mx-1"
                  style={{ fontSize: "14px", color: "rgb(236 71 90)" }}
                >
                  30% OFF
                </span>
              </div>              
            </div>
           <div className="btn_move_to_bag">
            <Link className="btn_mvto_bag_link" to={"/cart"}>MOVE TO BAG</Link>
           </div>
        </div>
      </div>
      <div className="wishlist_header">
        
        <div className="wishlist_product">
          <div className="wishlist_image_btn">

          <img src="https://github.com/KG-Coding-with-Prashant-Sir/CSS_Complete_YouTube/blob/main/Project%20Myntra%20Clone/images/categories/1.jpg?raw=true">

          </img>
          <div className="wishlist_cancel_btn">
          <span className="material-symbols-outlined">close</span>

          </div>

              
            </div>
           
          <div className="wishlist_product_price">
              <span style={{ fontSize: "16px", color: "black",marginLeft:"10px" }}>
                FBAR Typography Printed...
              </span>                           
              <div className="wishlist_price_product">
                <span style={{ fontSize: "14px", fontWeight: "700" }}>
                  Rs 552{" "}
                </span>
                <del className="mx-1" style={{ fontSize: "14px" }}>
                  Rs.709
                </del>
                <span
                  className="mx-1"
                  style={{ fontSize: "14px", color: "rgb(236 71 90)" }}
                >
                  30% OFF
                </span>
              </div>              
            </div>
           <div className="btn_move_to_bag">
            <Link className="btn_mvto_bag_link" to={"/cart"}>MOVE TO BAG</Link>
           </div>
        </div>
      </div>
      <div className="wishlist_header">
        
        <div className="wishlist_product">
          <div className="wishlist_image_btn">

          <img src="https://github.com/KG-Coding-with-Prashant-Sir/CSS_Complete_YouTube/blob/main/Project%20Myntra%20Clone/images/categories/1.jpg?raw=true">

          </img>
          <div className="wishlist_cancel_btn">
          <span className="material-symbols-outlined">close</span>

          </div>

              
            </div>
           
          <div className="wishlist_product_price">
              <span style={{ fontSize: "16px", color: "black",marginLeft:"10px" }}>
                FBAR Typography Printed...
              </span>                           
              <div className="wishlist_price_product">
                <span style={{ fontSize: "14px", fontWeight: "700" }}>
                  Rs 552{" "}
                </span>
                <del className="mx-1" style={{ fontSize: "14px" }}>
                  Rs.709
                </del>
                <span
                  className="mx-1"
                  style={{ fontSize: "14px", color: "rgb(236 71 90)" }}
                >
                  30% OFF
                </span>
              </div>              
            </div>
           <div className="btn_move_to_bag">
            <Link className="btn_mvto_bag_link" to={"/cart"}>MOVE TO BAG</Link>
           </div>
        </div>
      </div>
      </div>
      

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Wishlist;
