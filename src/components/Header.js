import React from 'react';
import {
  FacebookIcon,
  EmailIcon,
  LinkedinIcon,
  RedditIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";

import '../styles/header.scss';
import Logo from '../res/borderlogo.svg';

const Header = () => {

  // obviously replace this when go live!
  const shareUrl = 'www.google.com';
 
  return (
    <header className='main-header'>
      <img className="header-title" src={Logo} alt="Logo"/>
      <div className="share-links">
        <FacebookShareButton url={shareUrl}> <FacebookIcon size={32} round={true} /></FacebookShareButton>
        <EmailShareButton url={shareUrl}> <EmailIcon size={32} round={true} /></EmailShareButton>
        <RedditShareButton url={shareUrl}> <RedditIcon size={32} round={true} /></RedditShareButton>
        <TumblrShareButton url={shareUrl}> <TumblrIcon size={32} round={true} /></TumblrShareButton>
        <TwitterShareButton url={shareUrl}> <TwitterIcon size={32} round={true} /></TwitterShareButton>
        <WhatsappShareButton url={shareUrl}> <WhatsappIcon size={32} round={true} /></WhatsappShareButton>
        <LinkedinShareButton url={shareUrl}> <LinkedinIcon size={32} round={true} /></LinkedinShareButton>
      </div>
      <a className="my-website-link" href="http://philcohn.com/" target="_blank" rel="noopener noreferrer" >
        philcohn.com
      </a>
    </header>
  )
};



export default Header;

 