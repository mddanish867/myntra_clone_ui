import "./Homepage.css";
import TopHeader2 from "../Navigations/TopHeader2";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Login from "../Authentication/Login";

function Homepage() {
  return (
    <> 
      <div className="header">
        <TopHeader2 />
      </div>
      <div className="main">
        <div className="banner_container">
          <Banner />
        </div>
        {/* <div className="category_heading"> MEDAL WORTHY BRANDS TO BAG</div> */}
        <div className="category_item">
          <Categories/>
        </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </>
  );
}

export default Homepage;
