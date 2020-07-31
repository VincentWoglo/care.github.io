import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {Menulist, Logo,SearchShoping} from './navBar'
import {HeaderBanner} from './header.js';
import {NewestProducts, CreativeCollection, Discount} from './main.js';
import {Footer} from './footer.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <section className="navigation">
        <nav>
          <div className="d">
            <Logo />
            <Menulist />
            <SearchShoping />
          </div>
        </nav>
      </section>
      <section>
        <header>
          <HeaderBanner />
        </header>
      </section>
      <section>
        <div>
          <NewestProducts />
          <CreativeCollection />
          <Discount />
        </div>
      </section>
      <section>
        <div>
          <Footer />
        </div>
      </section>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
