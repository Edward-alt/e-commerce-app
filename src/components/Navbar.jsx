import React from 'react'
import '../index.css'
import telephoneIcon from '../assets/img/Telephone.png'
import emailIcon from '../assets/img/email.png'
import instagramIcon from '../assets/img/a.png'
import youtubeIcon from '../assets/img/a-1.png'
import fbIcon from '../assets/img/a-2.png'
import twtIcon from '../assets/img/a-3.png'
import searchIcon from '../assets/img/search.png'
import cartIcon from '../assets/img/cart.png'
import likeIcon from '../assets/img/heart.png'
import userIcon from '../assets/img/user a.png'
import arrowDown from '../assets/img/Arrow down.png'

const Navbar = () => {
  return (
    <div>
         <div className="Navbar1">
      <div className="NavA">
        <div className="NA">
          <div className="Nav1">
            <img className="emIcon" src={telephoneIcon} alt="Telephone" />
          </div>
          <p className="NavCont">(225) 555-0118</p>
        </div>
        <div className="NA">
          <div className="Nav1">
            <img className="emIcon" src={emailIcon} alt="email" />
          </div>
          <p className="NavCont">michelle.rivera@example.com</p>
        </div>
      </div>
      <div className="NavB">
        <p className="NavCont2">Follow Us and get a chance to win 80% off</p>
      </div>
      <div className="NavC">
        <p className="NavCont3">Follow Us:</p>
        <img className="NavCImg" src={instagramIcon} alt="socials" />
        <img className="NavCImg" src={youtubeIcon} alt="socials" />
        <img className="NavCImg" src={fbIcon} alt="socials" />
        <img className="NavCImg" src={twtIcon} alt="socials" />
      </div>
    </div>
    <div className="Navbar2">
      <div className="Nava">
        <a className="linkA" href="#">Bandage</a>
        <ul className="linkB">
          <li><a className="lnk" href="#">Home</a></li>
          <li>
            <a className="lnk" href="#">Shop <img src={arrowDown} /></a>
          </li>
          <li><a className="lnk" href="#">About</a></li>
          <li><a className="lnk" href="#">Blog</a></li>
          <li><a className="lnk" href="#">Contact</a></li>
          <li><a className="lnk" href="#">Pages</a></li>
        </ul>
      </div>
      <div className="linkb">
        <img src={userIcon} alt="user" />
        <a href="#"><p className="lnks">Login/Register</p></a>
        <img src={searchIcon} alt="user" />
        <img src={cartIcon} alt="user" />
        <img src={likeIcon} alt="user" />
      </div>
    </div>
    </div>
  )
}

export default Navbar