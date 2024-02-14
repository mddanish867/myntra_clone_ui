import { useNavigate, Link } from "react-router-dom";
import "./TopHeader.css";
import { useGetProductCategoryQuery } from "../../Apis/productCategoryApi";

function TopHeader2() {
  const navigate = useNavigate();
  const { data } = useGetProductCategoryQuery(null);
  let mainCategories: any = [];
  if (data) {
    let mainCategoryList = data.map((items: any) => items.mainCategory);
    mainCategories = Array.from(new Set(mainCategoryList));
  }

  return (
    <>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="https://raw.githubusercontent.com/KG-Coding-with-Prashant-Sir/CSS_Complete_YouTube/main/Project%20Myntra%20Clone/images/myntra_logo.webp"
            alt="not found"
          ></img>
        </Link>
      </div>
      <nav className="nav_bar">
        {mainCategories.map((elem: any) => (
          <Link to="/catalog">{elem}</Link>
        ))}
        <Link to="/catalog">
          Studio <sup>New</sup>
        </Link>
      </nav>

      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for product, brands and more"
        ></input>
      </div>
      <div className="action_bar">
        <div className="action_container_profile">
          <div className="dropdown">
            {/* start popup */}
            {/* <div className="dropdown"> */}
            <button className="dropbtn">
              <span className="material-symbols-outlined action_icon ">
                person
              </span>
              <span className="action_name">Profile</span>
            </button>
            <div className="dropdown-content">
              <span className="profile_name">
                <b>Welcome</b>
                <br />
                <span className="profile_name">To access account</span>
              </span>
              <button
                className="btn btn-outline-secondary login_btn"
                onClick={() => navigate("/login")}
              >
                Login/Signup
              </button>
              <hr style={{ borderColor: "#cccc", marginTop: "-5px" }} />
              <div className="profile_lnk">
                <Link
                  to="/myorder"
                  style={{ marginTop: "-16px", fontSize: "14px" }}
                >
                  Orders
                </Link>
                <Link
                  to="/wishlist"
                  style={{ marginTop: "-16px", fontSize: "14px" }}
                >
                  Wishlist
                </Link>
                <Link
                  to="/account"
                  style={{ marginTop: "-16px", fontSize: "14px" }}
                >
                  Gift Card
                </Link>
                <Link to="" style={{ marginTop: "-16px", fontSize: "14px" }}>
                  Contact Us
                </Link>
                <Link to="" style={{ marginTop: "-16px", fontSize: "14px" }}>
                  Myntra Insider
                  <sup style={{ color: "#ff3f6c", fontWeight: "600" }}>New</sup>
                </Link>
              </div>
              <hr style={{ borderColor: "#ccc", marginTop: "-5px" }} />
              <div className="profile_lnk">
                <Link to="" style={{ marginTop: "-16px", fontSize: "14px" }}>
                  Myntra Credit
                </Link>
                <Link to="" style={{ marginTop: "-16px", fontSize: "14px" }}>
                  Coupons
                </Link>
                <Link to="" style={{ marginTop: "-16px", fontSize: "14px" }}>
                  Saved Card
                </Link>
                <Link to="" style={{ marginTop: "-16px", fontSize: "14px" }}>
                  Contact Us
                </Link>
                <Link to="" style={{ marginTop: "-16px", fontSize: "14px" }}>
                  Saved VPAs
                </Link>
                <Link to="" style={{ marginTop: "-16px", fontSize: "14px" }}>
                  Saved Addresses
                </Link>
                <hr style={{ borderColor: "#ccc", marginTop: "-5px" }} />
                <Link
                  to="/editmyprofile"
                  style={{ marginTop: "-16px", fontSize: "14px" }}
                >
                  Edit Profile
                </Link>
                <Link to="/" style={{ marginTop: "-16px", fontSize: "14px" }}>
                  Logout
                </Link>
              </div>
            </div>
            {/* </div> */}
            {/* end popup */}
          </div>
        </div>
        <div className="action_container_wishlist">
          <span
            className="material-symbols-outlined action_icon"
            onClick={() => navigate("/wishlist")}
          >
            favorite
          </span>
          <span
            className="action_name"
            onClick={() => navigate("/emptywishlist")}
          >
            Wishlist
          </span>
        </div>
        <div className="action_container_bag">
          <span
            className="material-symbols-outlined action_icon"
            onClick={() => navigate("/cartdetails")}
          >
            shopping_bag
            <sup style={{ color: "rgb(249, 47, 95)", fontWeight: 700 }}>3</sup>
          </span>
          <span onClick={() => navigate("/emptycart")} className="action_name">
            bag
          </span>
        </div>
      </div>
    </>
  );
}

export default TopHeader2;
