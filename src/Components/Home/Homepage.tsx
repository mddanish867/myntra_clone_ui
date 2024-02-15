import "./Homepage.css";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";

function Homepage() {
  return (
    <>
      <Slider />
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
