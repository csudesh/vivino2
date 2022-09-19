import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Home.css";
import img1 from "../../assets/img1.png";
import userProfile from "../../assets/userProfile.png";
import bannerImg1 from "../../assets/banner1.png";
import bannerImg2 from "../../assets/banner2.png";
import bannerCardImg1 from "../../assets/bannerImg1.png";
import userImg from "../../assets/userImg.jpg";
import offerImg from "../../assets/offerImg.png";
import beerIcon from "../../assets/beerIcon.png";
import beerBottle from "../../assets/beerBottel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <p className="headingOne">Top lists in Australia </p>
          <p id="firstSectionSubHeading">Updated every Thursday</p>
          <Link className="filterBtn" to="/">
            A
          </Link>
          <Link className="filterBtn" to="/">
            B
          </Link>
          <Link className="filterBtn" to="/">
            C
          </Link>
          <p id="filterText">Best wines under $20 right now</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            items={4}
            nav
            dots={false}
          >
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={img1} alt="" />{" "}
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={img1} alt="" />{" "}
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={img1} alt="" />{" "}
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={img1} alt="" />{" "}
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={img1} alt="" />{" "}
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={img1} alt="" />{" "}
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <p className="headingOne">Dive into millions of ratings</p>
          <div className="row">
            <div className="col-md-6">
              <div className="sectionTwoItemDiv">
                <div>
                  <img style={{ maxWidth: "100%" }} src={bannerImg1} alt="" />
                </div>
                <p className="sectionTwobannertxt">Great offers right now!</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sectionTwoItemDiv">
                <div>
                  <img style={{ maxWidth: "100%" }} src={bannerImg2} alt="" />
                </div>
                <p className="sectionTwobannertxt">
                  Explore the most popular wines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div id="bannerContainer1">
            <div id="bannerImgDiv">
              <img src={bannerCardImg1} alt="" />
            </div>
            <div id="bannerContentDiv">
              <p id="bannerContentHeading">Share your love of wine</p>
              <p id="bannerContentTxt">
                Give your friend 10% off wine on Vivino. Once they order, you'll
                get a discount too!
              </p>
              <Link id="bannerContentBtn" to="/">
                Let's do it
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="row"
          style={{
            marginTop: "70px",
          }}
        >
          <div id="carouserHeadingImgDiv">
            <img src={userImg} alt="" />
          </div>
          <div id="carouserHeadingContentDiv">
            <p id="carouserHeadingContentTxt">Vivino Offers</p>
            <p id="carouserHeadingContentTxt2">
              I'm Ewan Proctor, Wine Editor at Vivino. Our community of 1
              million users in Australia lets me create the best offers for high
              quality wines.
            </p>
          </div>
        </div>
        <div className="row">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            items={4}
            nav
            dots={false}
          >
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={img1} alt="" />{" "}
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
                <div id="carouselBottomDiv">
                  <p>97 Point Negroamaro-Zinfandel</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={img1} alt="" />{" "}
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
                <div id="carouselBottomDiv">
                  <p>97 Point Negroamaro-Zinfandel</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={img1} alt="" />{" "}
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
                <div id="carouselBottomDiv">
                  <p>97 Point Negroamaro-Zinfandel</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={img1} alt="" />{" "}
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
                <div id="carouselBottomDiv">
                  <p>97 Point Negroamaro-Zinfandel</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={img1} alt="" />{" "}
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
                <div id="carouselBottomDiv">
                  <p>97 Point Negroamaro-Zinfandel</p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div id="offerDiv">
            <div id="offerContentContainer">
              <p id="offerContentHeading">A smarter way to drink wine.</p>
              <p id="offerContentTxt">
                Get access to our highest-rated, most-loved wines at up to 60%
                off retail.
              </p>
              <input
                type="text"
                name=""
                id="offerEmailInput"
                placeholder="Type your email"
              />
              <button id="offerJoinBtn">Join now</button>
            </div>
            <div id="offerImgDiv">
              <img src={offerImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "25px" }}>
        <div className="row">
          <p className="headingOne">Bestsellers in Australia</p>
          <p id="firstSectionSubHeading">
            Top-selling wines in Australia right now.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: "25px" }}>
        <div className="row">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            items={4}
            nav
            dots={false}
          >
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={beerBottle} alt="" />{" "}
                  <div id="discountRateDiv">
                    <p>Save</p>
                    <p>20%</p>
                  </div>
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={beerBottle} alt="" />{" "}
                  <div id="discountRateDiv">
                    <p>Save</p>
                    <p>20%</p>
                  </div>
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={beerBottle} alt="" />{" "}
                  <div id="discountRateDiv">
                    <p>Save</p>
                    <p>20%</p>
                  </div>
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={beerBottle} alt="" />{" "}
                  <div id="discountRateDiv">
                    <p>Save</p>
                    <p>20%</p>
                  </div>
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={beerBottle} alt="" />{" "}
                  <div id="discountRateDiv">
                    <p>Save</p>
                    <p>20%</p>
                  </div>
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>

      <div className="container" style={{ marginTop: "25px" }}>
        <div className="row">
          <p className="headingOne">Affordable reds</p>
          <p id="firstSectionSubHeading">Great wines at great prices</p>
        </div>
      </div>

      <div className="container" style={{ marginTop: "25px" }}>
        <div className="row">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            items={4}
            nav
            dots={false}
          >
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={beerBottle} alt="" />{" "}
                  <div id="discountRateDiv">
                    <p>Save</p>
                    <p>20%</p>
                  </div>
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={beerBottle} alt="" />{" "}
                  <div id="discountRateDiv">
                    <p>Save</p>
                    <p>20%</p>
                  </div>
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={beerBottle} alt="" />{" "}
                  <div id="discountRateDiv">
                    <p>Save</p>
                    <p>20%</p>
                  </div>
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={beerBottle} alt="" />{" "}
                  <div id="discountRateDiv">
                    <p>Save</p>
                    <p>20%</p>
                  </div>
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="carouselCard">
                <div id="caropuselPaddingDiv">
                  <img className="carouselImg" src={beerBottle} alt="" />{" "}
                  <div id="discountRateDiv">
                    <p>Save</p>
                    <p>20%</p>
                  </div>
                  <div className="ratingDiv">
                    <p className="ratingNum">4.2</p>
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#a31323" />
                    <FontAwesomeIcon icon={faStar} color="#B6B6B6" />
                    <p className="ratingCount">227 ratings</p>
                    <Link to="/" className="itemPrice">
                      $17.99
                    </Link>
                  </div>
                  <p className="cardBottomTxt1">One Stone Cellars</p>
                  <p className="cardBottomTxt2">Cabernet Sauvignon 2020</p>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <img className="userProfileImg" src={userProfile} alt="" />
                    <p className="userName">Paso Robles, United States</p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{
          backgroundColor: "#f7f3f0",
          padding: "50px 0 60px 0",
          marginTop: "150px",
        }}
      >
        <div className="container">
          <div className="row">
            <p id="bottombannerHeading">
              Trusted by millions to discover and buy the right wine every time.
            </p>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div id="bannerIconDiv">
                <img src={beerIcon} alt="" />
              </div>
              <div id="bannerTxtDiv">
                <p>Shop the world’s largest wine marketplace</p>
              </div>
            </div>
            <div className="col-md-3">
              <div id="bannerIconDiv">
                <img src={beerIcon} alt="" />
              </div>
              <div id="bannerTxtDiv">
                <p>Our support team is always here to help</p>
              </div>
            </div>
            <div className="col-md-3">
              <div id="bannerIconDiv">
                <img src={beerIcon} alt="" />
              </div>
              <div id="bannerTxtDiv">
                <p>Careful delivery right to your doorstep</p>
              </div>
            </div>
            <div className="col-md-3">
              <div id="bannerIconDiv">
                <img src={beerIcon} alt="" />
              </div>
              <div id="bannerTxtDiv">
                <p>Check honest reviews of any wine before purchase</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* <div style={{ height: "100px" }}></div> */}
    </div>
  );
}
