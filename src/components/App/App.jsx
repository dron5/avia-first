import React from 'react';

import Filter from "../Filter";
import Header from "../Header";
import Footer from "../Footer";
import Tickets from "../Tickets";
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
          <Tickets />
          <Footer />
        </div>
      </div>
    </div>
  );

export default App;
