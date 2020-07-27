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
  const shareUrl = 'http://border-painter.surge.sh/';
 
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
        Check out my homepage!
      </a>
      <h2 className="app-description">Create and download custom paintbrush-style border images for your HTML elements,
       and generate CSS border-image values. </h2>
    </header>
  )
};



export default Header;

 