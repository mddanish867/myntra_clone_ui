import { Link, useNavigate } from 'react-router-dom'
import './Emptywishlist.css'

function Emptywishlist() {
  const navigate=useNavigate();
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

      <div className='empty_wishlist'>
      <h4>PLEASE LOG IN</h4>
      <p>Login to view items in your wishlist.</p>
      <button className='btn btn-default' onClick={()=>navigate("/addwishlistitems")}>LOGIN</button>
    </div>
    </>
    
  )
}

export default Emptywishlist
