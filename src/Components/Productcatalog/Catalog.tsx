import { useState } from "react";
import Footer from "../Footer/Footer";
import TopHeader2 from "../Navigations/TopHeader2";
import "./Catalog.css";
import { Link } from "react-router-dom";

export default function Catalog() {
  const [brandflag, setbrandflag] = useState(false);
  const handleFlag = () => {
    if (brandflag === false) {
      setbrandflag(true);
    } else {
      setbrandflag(false);
    }
  };

  return (
    <>
      <div className="header">
        <TopHeader2 />
      </div>
      <div className="bg-default" style={{ marginTop: "23px" }}>
        <div className="container">
          <nav className="d-flex">
            <p
              className="mb-0"
              style={{
                fontSize: "13px",
                marginLeft: "-48px",
                marginTop: "-6px",
              }}
            >
              <Link to='' className="text-dark breadcrum_links">
                Home
              </Link>
              <span className="text-dark-50 mx-2 breadcrum_links"> / </span>
              <Link to='' className="text-dark breadcrum_links">
                Library
              </Link>
              <span className="text-dark-50 mx-2 breadcrum_links"> / </span>
              <Link to='' className="text-dark breadcrum_links">
                <u>Data</u>
              </Link>
            </p>
          </nav>
        </div>
      </div>
      <div className="total_product_count" style={{ marginTop: "13px",display:"flex",flexDirection:"row" }}>
        <p className="my-2" style={{ fontSize: "15px", marginLeft: "27px" }}>
          <span style={{fontWeight:700}}>Jeans for Mens</span> - 13283
        </p>
      </div>
      <div className="container my-4 catalog_filter">
        <div className="row">
          <aside className="col-md-3 product_catalog_filter" style={{ marginLeft: "-73px" }}>
            <div className="card" style={{borderTop: "0",borderRight:"1px solid #eee",borderBottom:"0" }}>
              <article className="filter-group">
                <header
                  className="card-header"
                  style={{ marginLeft: "9px", marginTop: "-5px" }}
                >
                  <Link
                    to=''
                    data-toggle="collapse"
                    data-target="#collapse_1"
                    aria-expanded="true"
                    className=""
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "15px",
                    }}
                  >
                    <p className="title">
                      <b>FILTERS</b>
                    </p>
                  </Link>
                </header>
                <div className="filter-content collapse show" id="collapse_1">
                  <div className="card-body">
                    <form
                      className="pb-3"
                      style={{ marginTop: "-22px", marginLeft: "10px" }}
                    >
                      <div className="input-group">
                        {brandflag ? (
                          <input
                            type="text"
                            className="form-control filter_text"
                            placeholder="search for brands"
                            style={{
                              height: "30px",
                              borderRadius: "30px",
                              borderRight: 0,
                            }}
                          />
                        ) : (
                          <p style={{ fontSize: "12px" }}>
                            <b>BRANDS</b>
                          </p>
                        )}

                        <div className="input-group-append ">
                          <button
                            className="btn btn-light filter_search_icone"
                            type="button"
                            style={{
                              marginLeft: `${
                                brandflag === false ? "139px" : "0"
                              }`,
                              height: "30px",
                              backgroundColor: "#eef0f3",
                              borderRadius: "30px",
                            }}
                            onClick={() => handleFlag()}
                          >
                            <span className="material-symbols-outlined filter_icon">
                              search
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>

                    <ul className="list-menu" style={{ marginLeft: "12px" }}>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="filter-group">
                <div className="filter-content collapse show" id="collapse_1">
                  <div className="card-body">
                    <form
                      className="pb-3"
                      style={{ marginTop: "-22px", marginLeft: "10px" }}
                    >
                      <div className="input-group">
                        {brandflag ? (
                          <input
                            type="text"
                            className="form-control filter_text"
                            placeholder="search for brands"
                            style={{
                              height: "30px",
                              borderRadius: "30px",
                              borderRight: 0,
                            }}
                          />
                        ) : (
                          <p style={{ fontSize: "12px" }}>
                            <b>PRICE</b>
                          </p>
                        )}

                        <div className="input-group-append ">
                          <button
                            className="btn btn-light filter_search_icone"
                            type="button"
                            style={{
                              marginLeft: `${
                                brandflag === false ? "155px" : "0"
                              }`,
                              height: "30px",
                              backgroundColor: "#eef0f3",
                              borderRadius: "30px",
                            }}
                            onClick={() => handleFlag()}
                          >
                            <span className="material-symbols-outlined filter_icon">
                              search
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>

                    <ul className="list-menu" style={{ marginLeft: "12px" }}>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="filter-group">
                <div className="filter-content collapse show" id="collapse_1">
                  <div className="card-body">
                    <form
                      className="pb-3"
                      style={{ marginTop: "-22px", marginLeft: "10px" }}
                    >
                      <div className="input-group">
                        {brandflag ? (
                          <input
                            type="text"
                            className="form-control filter_text"
                            placeholder="search for brands"
                            style={{
                              height: "30px",
                              borderRadius: "30px",
                              borderRight: 0,
                            }}
                          />
                        ) : (
                          <p style={{ fontSize: "12px" }}>
                            <b>COLORS</b>
                          </p>
                        )}

                        <div className="input-group-append ">
                          <button
                            className="btn btn-light filter_search_icone"
                            type="button"
                            style={{
                              marginLeft: `${
                                brandflag === false ? "142px" : "0"
                              }`,
                              height: "30px",
                              backgroundColor: "#eef0f3",
                              borderRadius: "30px",
                            }}
                            onClick={() => handleFlag()}
                          >
                            <span className="material-symbols-outlined filter_icon">
                              search
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>

                    <ul className="list-menu" style={{ marginLeft: "12px" }}>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="filter-group">
                <div className="filter-content collapse show" id="collapse_1">
                  <div className="card-body">
                    <form
                      className="pb-3"
                      style={{ marginTop: "-22px", marginLeft: "10px" }}
                    >
                      <div className="input-group">
                        {brandflag ? (
                          <input
                            type="text"
                            className="form-control filter_text"
                            placeholder="search for brands"
                            style={{
                              height: "30px",
                              borderRadius: "30px",
                              borderRight: 0,
                            }}
                          />
                        ) : (
                          <p style={{ fontSize: "12px" }}>
                            <b>DISCOUNT</b>
                          </p>
                        )}

                        <div className="input-group-append ">
                          <button
                            className="btn btn-light filter_search_icone"
                            type="button"
                            style={{
                              marginLeft: `${
                                brandflag === false ? "127px" : "0"
                              }`,
                              height: "30px",
                              backgroundColor: "#eef0f3",
                              borderRadius: "30px",
                            }}
                            onClick={() => handleFlag()}
                          >
                            <span className="material-symbols-outlined filter_icon">
                              search
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>

                    <ul className="list-menu" style={{ marginLeft: "12px" }}>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                      <li style={{ marginTop: "8px" }}>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            style={{ width: "17px" }}
                          />
                          <div
                            className="custom-control-label"
                            style={{ marginLeft: "10px", fontSize: "13px" }}
                          >
                            Mercedes
                            <b className="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </aside>
          <main className="col-md-9 mobile_view" style={{ width: "928px" }}>
            <header className="border-bottom mb-4 pb-3">
              <div
                className="form-inline"
                style={{ width: "285px", marginLeft: "660px" }}
              >
                <select className="mr-2 form-control">
                  <option>sort by: Recommended</option>
                  <option>Trending</option>
                  <option>Most Popular</option>
                  <option>Cheapest</option>
                </select>
              </div>
            </header>

            <div className="row catalog_item">             
              <div className="col-md-3">
                <figure
                  className="card card-product-grid"
                  style={{ border: "none", marginTop: "-24px" }}
                >
                  <div className="img-wrap">
                    <span className="badge badge-danger"> NEW </span>
                    <img
                      src="https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/o/6/h/3xl-wl051-rose-unemode-original-imagsx53sv3drytm.jpeg?q=70"
                      alt=""
                      className="img-fluid caltalog_img"
                    />
                  </div>
                  <figcaption className="info-wrap">
                    <Link
                      className="btn-overlay"
                      to=''
                      style={{
                        textDecoration: "none",
                        fontSize: "12px",
                        fontWeight: 700,
                        display: "flex",
                        flexDirection: "row",
                        height: "35px",
                      }}
                    >
                      <span
                        className="material-symbols-outlined action_icon"
                        style={{ marginTop: "5px", marginLeft: "55px" }}
                      >
                        favorite
                      </span>
                      <span style={{ marginTop: "8px" }}>Wishlist</span>
                    </Link>
                    <div className="fix-height">
                      <Link
                        to=''
                        className="title"
                        style={{ textDecoration: "none" }}
                      >
                        <b>Roadster</b>
                      </Link>
                      <Link
                        to=''
                        className="title"
                        style={{
                          textDecoration: "none",
                          fontWeight: 400,
                          fontSize: "13px",
                          color: "gray",
                        }}
                      >
                        Mens slim Tapered Slim Jeans
                      </Link>
                      <div className="price-wrap mt-2">
                        <span
                          className="price"
                          style={{ fontWeight: 700, fontSize: "13px" }}
                        >
                          Rs. 1280
                        </span>
                        <del
                          className="price-old text-muted"
                          style={{ fontSize: "13px" }}
                        >
                          {" "}
                          Rs.1980
                        </del>
                        <span
                          className="price"
                          style={{
                            fontWeight: 400,
                            fontSize: "13px",
                            color: "#f58742",
                          }}
                        >
                          {" "}
                          (69% OFF)
                        </span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-3">
                <figure
                  className="card card-product-grid"
                  style={{ border: "none" }}
                >
                  <div className="img-wrap">
                    <img
                      src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/w/y/o/m-flee18-navy-ewools-original-imagj6j87gauafru.jpeg?q=70&crop=false"
                      alt=""
                      className="img-fluid caltalog_img"
                    />
                  </div>
                  <figcaption className="info-wrap">
                    <Link
                      className="btn-overlay"
                      to=''
                      style={{
                        textDecoration: "none",
                        fontSize: "12px",
                        fontWeight: 700,
                        display: "flex",
                        flexDirection: "row",
                        height: "35px",
                      }}
                    >
                      <span
                        className="material-symbols-outlined action_icon"
                        style={{ marginTop: "5px", marginLeft: "55px" }}
                      >
                        favorite
                      </span>
                      <span style={{ marginTop: "8px" }}>Wishlist</span>
                    </Link>
                    <div className="fix-height">
                      <Link
                        to=''
                        className="title"
                        style={{ textDecoration: "none" }}
                      >
                        <b>Roadster</b>
                      </Link>
                      <Link
                        to=''
                        className="title"
                        style={{
                          textDecoration: "none",
                          fontWeight: 400,
                          fontSize: "13px",
                          color: "gray",
                        }}
                      >
                        Mens slim Tapered Slim Jeans
                      </Link>
                      <div className="price-wrap mt-2">
                        <span
                          className="price"
                          style={{ fontWeight: 700, fontSize: "13px" }}
                        >
                          Rs. 1280
                        </span>
                        <del
                          className="price-old text-muted"
                          style={{ fontSize: "13px" }}
                        >
                          {" "}
                          Rs.1980
                        </del>
                        <span
                          className="price"
                          style={{
                            fontWeight: 400,
                            fontSize: "13px",
                            color: "#f58742",
                          }}
                        >
                          {" "}
                          (69% OFF)
                        </span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>  
              <div className="col-md-3">
                <figure
                  className="card card-product-grid"
                  style={{ border: "none" }}
                >
                  <div className="img-wrap">
                    <img
                      src="https://rukminim2.flixcart.com/image/832/832/kyvvtzk0/jacket/t/t/e/xl-yes-kttpufferjacket102-kotty-original-imagbym5yvu9bpkt.jpeg?q=70&crop=false"
                      alt=""
                      className="img-fluid caltalog_img"
                    />
                  </div>
                  <figcaption className="info-wrap">
                    <Link
                      className="btn-overlay"
                      to=''
                      style={{
                        textDecoration: "none",
                        fontSize: "12px",
                        fontWeight: 700,
                        display: "flex",
                        flexDirection: "row",
                        height: "35px",
                      }}
                    >
                      <span
                        className="material-symbols-outlined action_icon"
                        style={{ marginTop: "5px", marginLeft: "55px" }}
                      >
                        favorite
                      </span>
                      <span style={{ marginTop: "8px" }}>Wishlist</span>
                    </Link>
                    <div className="fix-height">
                      <Link
                        to=''
                        className="title"
                        style={{ textDecoration: "none" }}
                      >
                        <b>Roadster</b>
                      </Link>
                      <Link
                        to=''
                        className="title"
                        style={{
                          textDecoration: "none",
                          fontWeight: 400,
                          fontSize: "13px",
                          color: "gray",
                        }}
                      >
                        Mens slim Tapered Slim Jeans
                      </Link>
                      <div className="price-wrap mt-2">
                        <span
                          className="price"
                          style={{ fontWeight: 700, fontSize: "13px" }}
                        >
                          Rs. 1280
                        </span>
                        <del
                          className="price-old text-muted"
                          style={{ fontSize: "13px" }}
                        >
                          {" "}
                          Rs.1980
                        </del>
                        <span
                          className="price"
                          style={{
                            fontWeight: 400,
                            fontSize: "13px",
                            color: "#f58742",
                          }}
                        >
                          {" "}
                          (69% OFF)
                        </span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-3">
                <figure
                  className="card card-product-grid"
                  style={{ border: "none" }}
                >
                  <div className="img-wrap">
                    <img
                      src="https://rukminim2.flixcart.com/image/832/832/k23m4cw0/thermal/w/g/f/l-mulf-lt-001-set-cm-dollar-ultra-original-imaezx74k7q8y4m6.jpeg?q=70&crop=false"
                      alt=""
                      className="img-fluid caltalog_img"
                    />
                  </div>
                  <figcaption className="info-wrap">
                    <Link
                      className="btn-overlay"
                      to=''
                      style={{
                        textDecoration: "none",
                        fontSize: "12px",
                        fontWeight: 700,
                        display: "flex",
                        flexDirection: "row",
                        height: "35px",
                      }}
                    >
                      <span
                        className="material-symbols-outlined action_icon"
                        style={{ marginTop: "5px", marginLeft: "55px" }}
                      >
                        favorite
                      </span>
                      <span style={{ marginTop: "8px" }}>Wishlist</span>
                    </Link>
                    <div className="fix-height">
                      <Link
                        to=''
                        className="title"
                        style={{ textDecoration: "none" }}
                      >
                        <b>Roadster</b>
                      </Link>
                      <Link
                        to=''
                        className="title"
                        style={{
                          textDecoration: "none",
                          fontWeight: 400,
                          fontSize: "13px",
                          color: "gray",
                        }}
                      >
                        Mens slim Tapered Slim Jeans
                      </Link>
                      <div className="price-wrap mt-2">
                        <span
                          className="price"
                          style={{ fontWeight: 700, fontSize: "13px" }}
                        >
                          Rs. 1280
                        </span>
                        <del
                          className="price-old text-muted"
                          style={{ fontSize: "13px" }}
                        >
                          {" "}
                          Rs.1980
                        </del>
                        <span
                          className="price"
                          style={{
                            fontWeight: 400,
                            fontSize: "13px",
                            color: "#f58742",
                          }}
                        >
                          {" "}
                          (69% OFF)
                        </span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-3">
                <figure
                  className="card card-product-grid"
                  style={{ border: "none" }}
                >
                  <div className="img-wrap">
                    <img
                      src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/u/x/n/s-wm17-ss01-tan-alan-jones-original-imaghhyjtv3hpywq.jpeg?q=70&crop=false"
                      alt=""
                      className="img-fluid caltalog_img"
                    />
                  </div>
                  <figcaption className="info-wrap">
                    <Link
                      className="btn-overlay"
                      to=''
                      style={{
                        textDecoration: "none",
                        fontSize: "12px",
                        fontWeight: 700,
                        display: "flex",
                        flexDirection: "row",
                        height: "35px",
                      }}
                    >
                      <span
                        className="material-symbols-outlined action_icon"
                        style={{ marginTop: "5px", marginLeft: "55px" }}
                      >
                        favorite
                      </span>
                      <span style={{ marginTop: "8px" }}>Wishlist</span>
                    </Link>
                    <div className="fix-height">
                      <Link
                        to=''
                        className="title"
                        style={{ textDecoration: "none" }}
                      >
                        <b>Roadster</b>
                      </Link>
                      <Link
                        to=''
                        className="title"
                        style={{
                          textDecoration: "none",
                          fontWeight: 400,
                          fontSize: "13px",
                          color: "gray",
                        }}
                      >
                        Mens slim Tapered Slim Jeans
                      </Link>
                      <div className="price-wrap mt-2">
                        <span
                          className="price"
                          style={{ fontWeight: 700, fontSize: "13px" }}
                        >
                          Rs. 1280
                        </span>
                        <del
                          className="price-old text-muted"
                          style={{ fontSize: "13px" }}
                        >
                          {" "}
                          Rs.1980
                        </del>
                        <span
                          className="price"
                          style={{
                            fontWeight: 400,
                            fontSize: "13px",
                            color: "#f58742",
                          }}
                        >
                          {" "}
                          (69% OFF)
                        </span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-3">
                <figure
                  className="card card-product-grid"
                  style={{ border: "none" }}
                >
                  <div className="img-wrap">
                    <img
                      src="https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/5/1/h/xl-wmn-hdy-blk-iamdifrnt-sollobell-original-imagqqcpf4uzfy6h.jpeg?q=70"
                      alt=""
                      className="img-fluid caltalog_img"
                    />
                  </div>
                  <figcaption className="info-wrap">
                    <Link
                      className="btn-overlay"
                      to=''
                      style={{
                        textDecoration: "none",
                        fontSize: "12px",
                        fontWeight: 700,
                        display: "flex",
                        flexDirection: "row",
                        height: "35px",
                      }}
                    >
                      <span
                        className="material-symbols-outlined action_icon"
                        style={{ marginTop: "5px", marginLeft: "55px" }}
                      >
                        favorite
                      </span>
                      <span style={{ marginTop: "8px" }}>Wishlist</span>
                    </Link>
                    <div className="fix-height">
                      <Link
                        to=''
                        className="title"
                        style={{ textDecoration: "none" }}
                      >
                        <b>Roadster</b>
                      </Link>
                      <Link
                        to=''
                        className="title"
                        style={{
                          textDecoration: "none",
                          fontWeight: 400,
                          fontSize: "13px",
                          color: "gray",
                        }}
                      >
                        Mens slim Tapered Slim Jeans
                      </Link>
                      <div className="price-wrap mt-2">
                        <span
                          className="price"
                          style={{ fontWeight: 700, fontSize: "13px" }}
                        >
                          Rs. 1280
                        </span>
                        <del
                          className="price-old text-muted"
                          style={{ fontSize: "13px" }}
                        >
                          {" "}
                          Rs.1980
                        </del>
                        <span
                          className="price"
                          style={{
                            fontWeight: 400,
                            fontSize: "13px",
                            color: "#f58742",
                          }}
                        >
                          {" "}
                          (69% OFF)
                        </span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-3">
                <figure
                  className="card card-product-grid"
                  style={{ border: "none" }}
                >
                  <div className="img-wrap">
                    <img
                      src="https://rukminim2.flixcart.com/image/612/612/xif0q/shrug/o/k/y/xxl-dbsg00001051-deebaco-original-imagv3uhz5bdnnm5.jpeg?q=70"
                      alt=""
                      className="img-fluid caltalog_img"
                    />
                  </div>
                  <figcaption className="info-wrap">
                    <Link
                      className="btn-overlay"
                      to=''
                      style={{
                        textDecoration: "none",
                        fontSize: "12px",
                        fontWeight: 700,
                        display: "flex",
                        flexDirection: "row",
                        height: "35px",
                      }}
                    >
                      <span
                        className="material-symbols-outlined action_icon"
                        style={{ marginTop: "5px", marginLeft: "55px" }}
                      >
                        favorite
                      </span>
                      <span style={{ marginTop: "8px" }}>Wishlist</span>
                    </Link>
                    <div className="fix-height">
                      <Link
                        to=''
                        className="title"
                        style={{ textDecoration: "none" }}
                      >
                        <b>Roadster</b>
                      </Link>
                      <Link
                        to=''
                        className="title"
                        style={{
                          textDecoration: "none",
                          fontWeight: 400,
                          fontSize: "13px",
                          color: "gray",
                        }}
                      >
                        Mens slim Tapered Slim Jeans
                      </Link>
                      <div className="price-wrap mt-2">
                        <span
                          className="price"
                          style={{ fontWeight: 700, fontSize: "13px" }}
                        >
                          Rs. 1280
                        </span>
                        <del
                          className="price-old text-muted"
                          style={{ fontSize: "13px" }}
                        >
                          {" "}
                          Rs.1980
                        </del>
                        <span
                          className="price"
                          style={{
                            fontWeight: 400,
                            fontSize: "13px",
                            color: "#f58742",
                          }}
                        >
                          {" "}
                          (69% OFF)
                        </span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-3">
                <figure
                  className="card card-product-grid"
                  style={{ border: "none" }}
                >
                  <div className="img-wrap">
                    <img
                      src="https://rukminim2.flixcart.com/image/612/612/xif0q/shrug/g/u/t/xl-dbsg00001022-deebaco-original-imagv3ugfhe4afgh.jpeg?q=70"
                      alt=""
                      className="img-fluid caltalog_img"
                    />
                  </div>
                  <figcaption className="info-wrap">
                    <Link
                      className="btn-overlay"
                      to=''
                      style={{
                        textDecoration: "none",
                        fontSize: "12px",
                        fontWeight: 700,
                        display: "flex",
                        flexDirection: "row",
                        height: "35px",
                      }}
                    >
                      <span
                        className="material-symbols-outlined action_icon"
                        style={{ marginTop: "5px", marginLeft: "55px" }}
                      >
                        favorite
                      </span>
                      <span style={{ marginTop: "8px" }}>Wishlist</span>
                    </Link>
                    <div className="fix-height">
                      <Link
                        to=''
                        className="title"
                        style={{ textDecoration: "none" }}
                      >
                        <b>Roadster</b>
                      </Link>
                      <Link
                        to=''
                        className="title"
                        style={{
                          textDecoration: "none",
                          fontWeight: 400,
                          fontSize: "13px",
                          color: "gray",
                        }}
                      >
                        Mens slim Tapered Slim Jeans
                      </Link>
                      <div className="price-wrap mt-2">
                        <span
                          className="price"
                          style={{ fontWeight: 700, fontSize: "13px" }}
                        >
                          Rs. 1280
                        </span>
                        <del
                          className="price-old text-muted"
                          style={{ fontSize: "13px" }}
                        >
                          {" "}
                          Rs.1980
                        </del>
                        <span
                          className="price"
                          style={{
                            fontWeight: 400,
                            fontSize: "13px",
                            color: "#f58742",
                          }}
                        >
                          {" "}
                          (69% OFF)
                        </span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>

            <nav className="mt-4 pagination" aria-label="Page navigation sample">
              <ul className="pagination">
                <li className="page-item disabled">
                  <Link className="page-link" to=''>
                    Previous
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" to=''>
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to=''>
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to=''>
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to=''>
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </main>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
