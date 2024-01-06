import "./Banner.css";
// import banner from './banner.jpg';
function Banner() {
  return (
    // <div className="banner_container">
    //   <img className="banner_image" src="https://cdna.artstation.com/p/assets/images/images/040/183/038/large/sonam-saxena-ntcc-8.jpg?1628098115" alt="banner"></img>
    // </div>
    <div className="banner_container">
<div id="demo" className="carousel slide" data-bs-ride="carousel">

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://github.com/KG-Coding-with-Prashant-Sir/CSS_Complete_YouTube/blob/main/Project%20Myntra%20Clone/images/banner.jpg?raw=true" alt="Los Angeles" className="d-block banner_image"/>
    </div>
    <div className="carousel-item">
      <img src="https://cdna.artstation.com/p/assets/images/images/040/183/038/large/sonam-saxena-ntcc-8.jpg?1628098115" alt="Chicago" className="d-block banner_image"/>
    </div>
    <div className="carousel-item">
      <img src="https://github.com/KG-Coding-with-Prashant-Sir/CSS_Complete_YouTube/blob/main/Project%20Myntra%20Clone/images/banner.jpg?raw=true" alt="New York" className="d-block banner_image"/>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default Banner
