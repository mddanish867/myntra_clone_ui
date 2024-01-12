import { Link } from 'react-router-dom';
import './Emptycart.css';

function Emptycart() {
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

      <div className='empty_cart'>
      <img src='https://constant.myntassets.com/checkout/assets/img/empty-bag.png'></img>
      <h4>Hey, its feels so light!</h4>
      <p>There is nothing in your cart. Let's add some items.</p>
      <button className='btn btn-default'>ADD ITEMS FROM WISHLIST</button>
    </div>
    </>
   
  )
}

export default Emptycart
