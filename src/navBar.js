import React, { Component } from 'react';
import './css/style.css';
import Search from './img/iconmonstr-search-thin.svg';
import ShoppingCart from './img/iconmonstr-shopping-cart-5.svg';
import UserIcon from './img/iconmonstr-user-male-thin.svg';
import logo from './img/logo.png';

class Logo extends Component {
  render(){
return(
  <div className="logo">
    <img src={logo} className="logo-img"/>
  </div>
)
}
}
class Menulist extends Component {
  render(){
  return (
    <div className="nav">
      <ul className="product-categories">
        <li className="home-category">
          <a href="">
          Home</a>
          <div className="category-dropdown">
            <ul>
            </ul>
          </div>
          </li>
        <li className="blog-category">
          <a href="">Blog</a>
        </li>
        <li className="page-category"><a href="">Pages</a></li>
        <li className="elements-category"><a href="">Elements</a></li>
        <li className="Portfolio-category"><a href="">Portfolio</a></li>
        <li className="shop-category"><a href="">Shop</a></li>
        <li className="features-category"><a href="">Features</a></li>
      </ul>
    </div>
  );
}}
class SearchShoping extends Component {
  render(){
  return (
    <div>
    <div className="icons">
      
      <img src={Search} className="search-icon"/>
      <div className="shopping-cart">
        <div className="items-in-cart">0</div>
      <img src={ShoppingCart} />
      </div>
      <img src={UserIcon} />
    </div>
    </div>
  )}}

export {Menulist, Logo, SearchShoping};
