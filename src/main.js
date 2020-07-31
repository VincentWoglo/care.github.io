import React, { Component } from 'react';
import Product1 from "./img/special product 1.jpg"
import Product2 from "./img/special product 2.jpg"
import Product3 from "./img/special product 3.jpg"
import Product4 from "./img/special product 4.jpg"
import Product5 from "./img/special product 5.jpg"
import './css/style.css';



class NewestProducts extends Component {
    render(){
  return(
      <div>
          <section>
              <div className="new-products">
                  <h1 className="new-products-title">Newest Products</h1>
                  <div className="Card-items-flex">
                  <div className="">
                      <div className="Card-News-Product">
                      <p className="Card-item-status-sale">New</p>
                      <img src={Product1} className="Card-title-img" />
                      <div className="Card-option">

                      </div>
                      </div>
                      <h1 className="Card-item-title">Coffee Bags</h1>
                      <h1 className="Card-item-price">$360</h1>
                  </div>
                  <div className="">
                      <div className="Card-News-Product">
                      <p className="Card-item-status-sale">New</p>
                      <img src={Product2} className="Card-title-img" />
                      <div className="Card-option">

                      </div>
                      </div>
                      <h1 className="Card-item-title">Coffee Bags</h1>
                      <h1 className="Card-item-price">$360</h1>
                  </div>
                  <div className="">
                      <div className="Card-News-Product">
                      <p className="Card-item-status">New</p>
                      <img src={Product3} className="Card-title-img" />
                      <div className="Card-option">

                      </div>
                      </div>
                      <h1 className="Card-item-title">Coffee Bags</h1>
                      <h1 className="Card-item-price">$360</h1>
                  </div>
                  <div className="">
                      <div className="Card-News-Product">
                      <p className="Card-item-status-sale">New</p>
                      <img src={Product5} className="Card-title-img" />
                      <div className="Card-option">

                      </div>
                      </div>
                      <h1 className="Card-item-title">Coffee Bags</h1>
                      <h1 className="Card-item-price">$360</h1>
                  </div>
                  <div className="">
                      <div className="Card-News-Product">
                      <p className="Card-item-status">New</p>
                      <img src={Product4} className="Card-title-img" />
                      <div className="Card-option">

                      </div>
                      </div>
                      <h1 className="Card-item-title">Coffee Bags</h1>
                      <h1 className="Card-item-price">$360</h1>
                  </div>

              </div>

              </div>
          </section>

      </div>
  )}}
  class CreativeCollection extends Component {
    render(){
  return(
      <div>
          <section>
              <div className="creative-collection">
                  <div className="collection-center">
                  <h1 className="creative-collections-name">Creative Collection</h1>
                  <p className="creative-collections-desc">
                  I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                  </p>
                  <input type="button" className="creative-collections-btn" value="View All"/>
              </div>
              </div>
          </section>
      </div>
  )}}

  class Discount extends Component {
    render(){
  return(
      <div>
          <section>
              <div className="discount-background">
                  <div className="discount-contained">
                  <h1 className="buy-now-discount">Buy It And Get 50% Discount</h1>
                  <input type="button" className="view-all-btn" value="View All"/>
              </div>
              </div>
          </section>
      </div>
  )}}
  export {NewestProducts, CreativeCollection, Discount}