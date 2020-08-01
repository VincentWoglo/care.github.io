import React, { Component } from 'react';
import './css/style.css';
import Visa from './img/visa-2.svg';
import logo from './img/logo white.png';
import MasterCard from './img/mastercard-6.svg';
import PayPal from './img/paypal-icon.svg';
import AmericanExpress from './img/american-express-2.svg';
import DiscoverCard from './img/discover-4.svg';

class Footer extends Component {
    render(){
  return(
      <div>
          <section>
              <footer>
                  <div className="footer-top-center">
                  <div className="top-footer">
                      <div className="footer">
                          <img src={logo}/>
                          <p className="about-company">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                          </p>
                          <div className="social-media">
                          <i class="fab fa-facebook-f"></i>
                          <i class="fab fa-google-plus-g"></i>
                          <i class="fab fa-instagram"></i>
                          <i class="fab fa-twitter"></i>
                          <i class="fas fa-rss"></i>
                          </div>
                      </div>

                      <div className="my-account">
                          <h1 className="footer-title">My Account</h1>
                          <ul>
                              <li className="footer-item-1">Men</li>
                              <li className="footer-item-2">Women</li>
                              <li className="footer-item-3">Clothing</li>
                              <li className="footer-item-4">Accessories</li>
                              <li className="footer-item-5">Featured</li>
                          </ul>
                      </div>
                      <div className="why-we-choose">
                          <h1 className="footer-title">Why We Chooset</h1>
                          <ul>
                              <li className="footer-item-1">Shopping & return</li>
                              <li className="footer-item-2">Secure shopping</li>
                              <li className="footer-item-3">Gallery</li>
                              <li className="footer-item-4">Affiliates</li>
                              <li className="footer-item-5">Contacts</li>
                          </ul>
                      </div>
                      <div className="store-information">
                          <h1 className="footer-title">Why We Chooset</h1>
                          <ul>
                              <li className="footer-item-1">Unice Demo Store, Demo store India 345-659</li>
                              <li className="footer-item-2">Secure shopping</li>
                              <li className="footer-item-3">Gallery</li>
                              <li className="footer-item-4">Affiliates</li>
                              <li className="footer-item-5">Contacts</li>
                          </ul>
                      </div>
                  </div>
                  </div>
                  <div className="footer-bottom">
                      <div className="footer-bottom-center">
                          <h1 className="footer-copyright">&copy; Unice powered by KW</h1>
                          <div className="credit">
                              <img src={Visa} className="credit-svg"/>
                              <img src={MasterCard} className="credit-svg"/>
                              <img src={PayPal} className="credit-svg"/>
                              <img src={AmericanExpress} className="credit-svg"/>
                              <img src={DiscoverCard} className="credit-svg"/>
                          </div>
                      </div>
                  </div>
              </footer>
          </section>
      </div>
  )}}
  export {Footer}