import './Footer.css';
function Layout() {
  return (
    <>
    <div className='footer_container'>
      <div className='footer_column'>
        <h3>ONLINE SHOPPING</h3>
        <a href="#">Men</a>        
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">GiftCard </a>
        <a href="#">Myntra Insider </a>
      </div>  
      <div className='footer_column'>
        <h3>CUSTOMER POLICIES</h3>
        <a href="#">Contact Us</a>        
        <a href="#">FAQ</a>
        <a href="#">T&C</a>
        <a href="#">Terms of Use</a>
        <a href="#">Track Orders</a>
        <a href="#">Shipping  </a>
        <a href="#">Cancellation </a>
        <a href="#">Return </a>
        <a href="#">Privacy policy </a>
        <a href="#">Grievence Offer </a>

      </div>
      <div className='footer_column'>
        <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
        <div className='download_link'>
          <a href='#'><img className='download_link_google' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITHfIWvY6HOgmvSwmFiPdBTTXP2cjOqbc2w&usqp=CAU'></img></a>
          <a href='#'><img className='download_link_apple' src='https://e7.pngegg.com/pngimages/32/544/png-clipart-android-google-play-app-store-android-text-logo-thumbnail.png'></img></a>
        </div>
      </div>   
      <div className='footer_column'>
        <div className='footer_column_image'>
         <img className='authentic_image' src='https://previews.123rf.com/images/arcady31/arcady311607/arcady31160700053/60391485-100-authentic-rubber-stamp.jpg'></img>
        <p className='authentic_text'><b>100% ORIGINAL</b> guarantee for <br/><span style={{color:"gray"}}>all products at myntra.com</span> </p>
        </div>
        <div className='footer_column_image'>
         <img className='authentic_image_return' src='https://cdn.shopify.com/s/files/1/0299/8563/6396/files/14dayreturns_240x240.jpg?v=1612703450'></img>
        <p className='authentic_return_text'><b>Return within 14days</b> of <br/><span style={{color:"gray"}}>receiving your order</span> </p>
        </div>
      </div> 
    </div>
    <hr/>
    <div className='copyright'>
    © 2024 www.myntra.com. All rights reserved.

    </div>
    </>
  )
}

export default Layout
