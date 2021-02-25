import React from 'react';

import Filter from "../Filter";
import Header from "../Header";
import Footer from "../Footer";
import classes from './App.module.scss';
import fly from'../../img/Fly.svg';

const App = () => (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
          <img src={fly} alt="logo"/>
      </div>
      <div className={classes.App__wrapper}>
      <Filter />
        <div className={classes.App__container}>
          <Header />
          <main className={classes.App}>
            <div className={classes.Ticket}>
              <div className={classes.Ticket__price}>
                <span>Price</span>
                <span>Logo</span>
              </div>
              <div className={classes.Ticket__direction}>
                <div>
                  <div className={classes.title}>MOW - HKT</div>
                  <div>2:6 - 22:45</div>
                </div>
                <div>
                  <div className={classes.title}>В ПУТИ</div>
                  <div>20ч39мин</div>
                </div>
                <div>
                  <div className={classes.title}>2 ПЕРЕСАДКИ</div>
                  <div>DXB JNB</div>
                </div>
              </div>  
              <div className={classes.Ticket__direction}>
                <div>
                  <div className={classes.title}>HKT - MOW</div>
                  <div>2:6 - 22:45</div>
                </div>
                <div>
                  <div className={classes.title}>В ПУТИ</div>
                  <div>20ч39мин</div>
                </div>
                <div>
                  <div className={classes.title}>2 ПЕРЕСАДКИ</div>
                  <div>JNB - DXB</div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );

export default App;
