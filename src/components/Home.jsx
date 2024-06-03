import React from "react";
import { useState } from "react";
import "../index.css";

import instagramIcon from "../assets/img/a.png";
import youtubeIcon from "../assets/img/a-1.png";
import fbIcon from "../assets/img/a-2.png";
import twtIcon from "../assets/img/a-3.png";
import alarmIcon from "../assets/img/alarm.png";
import arrowCurvedIcon from "../assets/img/arrow curved.png";
import arrowDown from "../assets/img/Arrow down.png";
import arrowRight from "../assets/img/arrow light.png";
import arrowRightBlue from "../assets/img/arrow.png";
import arrowRightLight from "../assets/img/arrow-right.png";
import awsIcon from "../assets/img/aws.png";
import backgroundImg from "../assets/img/background.png";
import basket from "../assets/img/basket.png";
import bookReadIcon from "../assets/img/book-reader.png";
import cardCover from "../assets/img/card-cover-5.png";
import cardCover2 from "../assets/img/card-cover-6.png";
import cardCover3 from "../assets/img/card-cover-6-1.png";
import cardCover4 from "../assets/img/card-cover-7.png";
import carouselCaption from "../assets/img/carouselCaptions 1.png";
import carouselCaption2 from "../assets/img/carouselCaptions.png";
import carouselCaption3 from "../assets/img/carousel-inner.png";
import cartIcon from "../assets/img/cart.png";
import concrete from "../assets/img/concrete.png";
import deleteIcon from "../assets/img/delete.png";
import emailIcon from "../assets/img/email.png";
import faBrandsIcon from "../assets/img/fa-brands-3.png";
import facebookIcon from "../assets/img/facebook.png";
import likeIcon from "../assets/img/heart.png";
import hooliIcon from "../assets/img/Hooli.png";
import instagramIconColored from "../assets/img/instagram.png";
import likeIcon2 from "../assets/img/like.png";
import lyatIcon from "../assets/img/Lyat.png";
import mastercardIcon from "../assets/img/Mastercard.png";
import MinusIcon from "../assets/img/Minus.png";
import MoreIcon from "../assets/img/more.png";
import paystackIcon from "../assets/img/Paystack.png";
import picsIcon from "../assets/img/picture.png";
import plusIcon from "../assets/img/Plus.png";
import colors from "../assets/img/product-colors.png";
import productImage1 from "../assets/img/product-cover1.png";
import productImage2 from "../assets/img/product-cover2.png";
import productImage3 from "../assets/img/product-cover3.png";
import productImage4 from "../assets/img/product-cover4.png";
import productImage5 from "../assets/img/product-cover5.png";
import productImage6 from "../assets/img/product-cover6.png";
import productImage7 from "../assets/img/product-cover7.png";
import productImage8 from "../assets/img/product-cover8.png";
import productImage9 from "../assets/img/product-cover9.png";
import productImage10 from "../assets/img/product-cover10.png";
import productImage11 from "../assets/img/product-cover11.png";
import productImage12 from "../assets/img/product-cover12.png";
import productImage13 from "../assets/img/product-cover13.png";
import redditIcon from "../assets/img/reddit.png";
import searchIcon from "../assets/img/search.png";
import stackedImage from "../assets/img/stacked img.png";
import starEmptyImage from "../assets/img/Star empty.png";
import starLightImage from "../assets/img/Star light.png";
import starImage from "../assets/img/Star.png";
import stripeIcon from "../assets/img/stripe.png";
import telephoneIcon from "../assets/img/Telephone.png";
import twitterIcon from "../assets/img/twitter.png";
import unsplashImage1 from "../assets/img/unsplash1.png";
import unsplashImage2 from "../assets/img/unsplash2.png";
import unsplashImage3 from "../assets/img/unsplash3.png";
import unsplashImage4 from "../assets/img/unsplash4.png";
import unsplashImage5 from "../assets/img/unsplash5.png";
import userIcon from "../assets/img/user a.png";
import userImage from "../assets/img/user1.png";
import visaIcon from "../assets/img/Visa.png";
import star from "../assets/img/stars.png";
import emailButton from "../assets/img/email button.png";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="wrapper">
        <div className="mainSection">
          <div className="heroSection">
            <img src={cardCover} alt="card" />
          </div>
          <div className="hCard1">
            <img src={cardCover2} alt="card" />
            <img src={cardCover3} alt="card" />
            <img src={cardCover4} alt="card" />
          </div>
        </div>
      </div>

      <div className="Products">
        <div className="Head1">
          <p className="txt1">Featured Products</p>
          <p className="txt2">BESTSELLER PRODUCTS</p>
          <p className="txt3">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="productCards">
          <div className="cards">
            <div className="card1">
              <img
                className="cardIcon"
                src={productImage13}
                alt="productCard"
              ></img>
              <p className="cardText1">Graphic Design</p>
              <p className="cardText2">English Department</p>
              <div className="cardPrice">
                <p className="price1">$16.48</p>
                <p className="price2">$6.48</p>
              </div>
            </div>
            <div className="card1">
              <img
                className="cardIcon"
                src={productImage12}
                alt="productCard"
              ></img>
              <p className="cardText1">Graphic Design</p>
              <p className="cardText2">English Department</p>
              <div className="cardPrice">
                <p className="price1">$16.48</p>
                <p className="price2">$6.48</p>
              </div>
            </div>
            <div className="card1">
              <img
                className="cardIcon"
                src={productImage11}
                alt="productCard"
              ></img>
              <p className="cardText1">Graphic Design</p>
              <p className="cardText2">English Department</p>
              <div className="cardPrice">
                <p className="price1">$16.48</p>
                <p className="price2">$6.48</p>
              </div>
            </div>
            <div className="card1">
              <img
                className="cardIcon"
                src={productImage10}
                alt="productCard"
              ></img>
              <p className="cardText1">Graphic Design</p>
              <p className="cardText2">English Department</p>
              <div className="cardPrice">
                <p className="price1">$16.48</p>
                <p className="price2">$6.48</p>
              </div>
            </div>
            <div className="card1">
              <img
                className="cardIcon"
                src={productImage9}
                alt="productCard"
              ></img>
              <p className="cardText1">Graphic Design</p>
              <p className="cardText2">English Department</p>
              <div className="cardPrice">
                <p className="price1">$16.48</p>
                <p className="price2">$6.48</p>
              </div>
            </div>
            <div className="card1">
              <img
                className="cardIcon"
                src={productImage8}
                alt="productCard"
              ></img>
              <p className="cardText1">Graphic Design</p>
              <p className="cardText2">English Department</p>
              <div className="cardPrice">
                <p className="price1">$16.48</p>
                <p className="price2">$6.48</p>
              </div>
            </div>
            <div className="card1">
              <img
                className="cardIcon"
                src={productImage7}
                alt="productCard"
              ></img>
              <p className="cardText1">Graphic Design</p>
              <p className="cardText2">English Department</p>
              <div className="cardPrice">
                <p className="price1">$16.48</p>
                <p className="price2">$6.48</p>
              </div>
            </div>
            <div className="card1">
              <img
                className="cardIcon"
                src={productImage6}
                alt="productCard"
              ></img>
              <p className="cardText1">Graphic Design</p>
              <p className="cardText2">English Department</p>
              <div className="cardPrice">
                <p className="price1">$16.48</p>
                <p className="price2">$6.48</p>
              </div>
            </div>
            <div className="card1">
              <img
                className="cardIcon"
                src={productImage5}
                alt="productCard"
              ></img>
              <p className="cardText1">Graphic Design</p>
              <p className="cardText2">English Department</p>
              <div className="cardPrice">
                <p className="price1">$16.48</p>
                <p className="price2">$6.48</p>
              </div>
            </div>
            <div className="card1">
              <img
                className="cardIcon"
                src={productImage4}
                alt="productCard"
              ></img>
              <p className="cardText1">Graphic Design</p>
              <p className="cardText2">English Department</p>
              <div className="cardPrice">
                <p className="price1">$16.48</p>
                <p className="price2">$6.48</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Hero2">
        <div className="headsA">
          <div className="Head1">
            <p className="txt1">Featured Products</p>
            <p className="txt2">THE BEST SERVICES</p>
            <p className="txt3">
              Problems trying to resolve the conflict between
            </p>
          </div>
        </div>
        <div className="Hero2Body">
          <div className="hcard1">
            <img src={bookReadIcon} alt="book" />
            <p className="Tops">Easy Wins</p>
            <p className="hcardT">Get your best looking smile now!</p>
          </div>
          <div className="hcard1">
            <img src={concrete} alt="concrete" />
            <p className="Tops">Concrete</p>
            <p className="hcardT">
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </p>
          </div>
          <div className="hcard1">
            <img src={arrowCurvedIcon} alt="arrow icon" />
            <p className="Tops">Hack growth</p>
            <p className="hcardT">Overcame any hurdle or any other problem.</p>
          </div>
        </div>
      </div>

      <div className="Hero3">
        <div className="Hero3C">
          <div className="headsB">
            <p className="headsBtxt">Practice Advise</p>
            <p className="headsBtxt2">Featured Posts</p>
          </div>
          <div className="hero3Card">
            <div className="hero3card1">
              <img className="imghead3" src={unsplashImage2} alt="img" />
              <div className="hero3txt">
                <p className="hero3txta">Google</p>
                <p className="hero3txt2">Trending</p>
                <p className="hero3txt2">New</p>
              </div>
              <p className="txtBig">
                Loudest à la Madison #1 <br />
                (L'integral)
              </p>
              <p className="txtSmall">
                We focus on ergonomics and meeting <br /> you where you work.
                It's only a<br />
                keystroke away.
              </p>
              <div className="underA">
                <div className="under">
                  <img className="smallImg" src={alarmIcon} alt="img" />
                  <p className="txtSmall">22 April 2021</p>
                </div>
                <div className="under">
                  <img className="smallImg" src={picsIcon} alt="img" />
                  <p className="txtSmall">10 comments</p>
                </div>
              </div>
              <div className="beneath">
                <p className="txtSmall">Learn More</p>
                <img className="arrowImg" src={arrowRightBlue} alt="img" />
              </div>
            </div>
            <div className="hero3card1">
              <img className="imghead3" src={unsplashImage4} alt="img" />
              <div className="hero3txt">
                <p className="hero3txta">Google</p>
                <p className="hero3txt2">Trending</p>
                <p className="hero3txt2">New</p>
              </div>
              <p className="txtBig">
                Loudest à la Madison #1 <br />
                (L'integral)
              </p>
              <p className="txtSmall">
                We focus on ergonomics and meeting <br /> you where you work.
                It's only a<br />
                keystroke away.
              </p>
              <div className="underA">
                <div className="under">
                  <img className="smallImg" src={alarmIcon} alt="img" />
                  <p className="txtSmall">22 April 2021</p>
                </div>
                <div className="under">
                  <img className="smallImg" src={picsIcon} alt="img" />
                  <p className="txtSmall">10 comments</p>
                </div>
              </div>
              <div className="beneath">
                <p className="txtSmall">Learn More</p>
                <img className="arrowImg" src={arrowRightBlue} alt="img" />
              </div>
            </div>
            <div className="hero3card1">
              <img className="imghead3" src={unsplashImage1} alt="img" />
              <div className="hero3txt">
                <p className="hero3txta">Google</p>
                <p className="hero3txt2">Trending</p>
                <p className="hero3txt2">New</p>
              </div>
              <p className="txtBig">
                Loudest à la Madison #1 <br />
                (L'integral)
              </p>
              <p className="txtSmall">
                We focus on ergonomics and meeting <br /> you where you work.
                It's only a<br />
                keystroke away.
              </p>
              <div className="underA">
                <div className="under">
                  <img className="smallImg" src={alarmIcon} alt="img" />
                  <p className="txtSmall">22 April 2021</p>
                </div>
                <div className="under">
                  <img className="smallImg" src={picsIcon} alt="img" />
                  <p className="txtSmall">10 comments</p>
                </div>
              </div>
              <div className="beneath">
                <p className="txtSmall">Learn More</p>
                <img className="arrowImg" src={arrowRightBlue} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Hero4">
        <div className="hero4cont">
          <div className="pageA">
            <div className="txtH4">
              <p className="pageTxt">What they say about us</p>
              <img className="userImg" src={userImage} alt="user" />
              <img className="star" src={star} alt="star" />
              <p className="p4">
                Slate helps you see how many more days you need to work to{" "}
                <br /> reach your financial goal.
              </p>
              <p className="page4">Regina Miles</p>
              <p className="pageb">Designer</p>
            </div>
          </div>
          <div className="pageB">
            <img src={stackedImage} alt="img" />
          </div>
        </div>
      </div>

      <div className="backgroundImage">
        <div className="hero5T">
          <p className="page4">Designing Better Experience</p>
          <p className="hero5Txt">
            Problems trying to resolve
            <br /> the conflict between
          </p>
          <p className="hero5Txt2">
            Problems trying to resolve the conflict between the two major
            <br /> realms of Classical physics
          </p>
          <p className="price5"> $16.48</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
