import React, { Component } from 'react';
import './css/style.css';
import KidsSectionImg from './img/kids section.jpg';
import WomenSectionImg from './img/women section.jpg'
import MenSectionImg from './img/men section.jpg';
class HeaderBanner extends Component {
    render(){
  return(
      <div>
          <header>
              <div className="header">
                  <div className="collection-container">
                  <div className="collection">
                      <h1 className="banner-name">Big Collection</h1>
                      <p className="banner-desc">
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                      </p>
                      <input type="button" className="Banner-collection-btn" value="Collections" />
                  </div>
                  <div className="gender-section">
                      <div className="kids-section">
                          <img src={KidsSectionImg} className="kids-section-img" />
                      </div>
                      <div className="women-section">
                          <div className="overlay"></div>
                          <img src={WomenSectionImg} className='women-section-img' />
                      </div>
                      <div className="men-section">
                          <div className="overlay"></div>
                          <img src={MenSectionImg} className='Men-section-img' />
                      </div>
                  </div>
                  </div>
              </div>
          </header>
      </div>
  )}}
  export {HeaderBanner}