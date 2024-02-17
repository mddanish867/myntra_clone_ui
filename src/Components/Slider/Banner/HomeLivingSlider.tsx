import './HomeLivingSlider.css';
import { Carousel } from "react-bootstrap";
function HomeLivingSlider() {
  return (
    <>
    <div className="banner_container">
     <Carousel controls={false}>
       <Carousel.Item>
         <img
           className="d-block w-100"
           src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/6/8/eff01060-f706-468d-b97c-95cdf43174f91528443826867-Desktop-Home-Banner.jpg"
           alt="First slide"
         />
       </Carousel.Item>
                   
     </Carousel>
   </div> 
   </>
  )
}

export default HomeLivingSlider
