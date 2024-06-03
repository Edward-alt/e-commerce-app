import React from 'react'
import '../index.css'
import facebookIcon from "../assets/img/facebook.png";
import instagramIconColored from "../assets/img/instagram.png";
import twitterIcon from "../assets/img/twitter.png";
import emailButton from "../assets/img/email button.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footNav">
          <p className="linkA">Bandage</p>
          <div className="footImg">
            <img src={facebookIcon} alt="socials" />
            <img src={instagramIconColored} alt="socials" />
            <img src={twitterIcon} alt="socials" />
          </div>
        </div>
        <div className="footCont">
          <div className="contA">
            <ul className="A">
              <li>
                <p className="Tops">Company Info</p>
              </li>
              <li>
                <p>About Us</p>
              </li>
              <li>
                <p>Carrier</p>
              </li>
              <li>
                <p>We are hiring</p>
              </li>
              <li>
                <p>blog</p>
              </li>
            </ul>
          </div>
          <div className="contB">
            <ul className="B">
              <li>
                <p className="Tops">Legal</p>
              </li>
              <li>
                <p>About Us</p>
              </li>
              <li>
                <p>Carrier</p>
              </li>
              <li>
                <p>We are hiring</p>
              </li>
              <li>
                <p>blog</p>
              </li>
            </ul>
          </div>
          <div className="contC">
            <ul className="C">
              <li>
                <p className="Tops">Features</p>
              </li>
              <li>
                <p>Business Marketing</p>
              </li>
              <li>
                <p>User Analytics</p>
              </li>
              <li>
                <p>Live Chat</p>
              </li>
              <li>
                <p>Unlimited Support</p>
              </li>
            </ul>
          </div>
          <div className="contD">
            <ul className="D">
              <li>
                <p className="Tops">Resources</p>
              </li>
              <li>
                <p>IOS & Android</p>
              </li>
              <li>
                <p>Watch a Demo</p>
              </li>
              <li>
                <p>Customers</p>
              </li>
              <li>
                <p>API</p>
              </li>
            </ul>
          </div>
          <div className="contE">
            <ul className="E">
              <li>
                <p className="Tops">Get in Touch</p>
              </li>
              <img src={emailButton} alt="img" />
              <li>
                <p>Lore imp sum dolor Amit</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <p className="lost">Made With Love By Finland All Right Reserved </p>
        </div>
      </div>
    </div>
  )
}

export default Footer