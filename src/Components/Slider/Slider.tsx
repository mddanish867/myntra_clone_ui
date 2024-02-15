import React from "react";
import Banner from "./Banner/Banner";
import Categories from "../Categories/Categories";
import TopHeader2 from "../Navigations/TopHeader2";

function Slider() {
  return (
    <>
      <div className="header">
        <TopHeader2 />
      </div>
      <Banner />
      <div className="category_item">
        <Categories />
      </div>
    </>
  );
}

export default Slider;
