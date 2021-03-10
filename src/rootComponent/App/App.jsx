import React from "react";

import Main from "../../containers/Main";
import classes from "./App.module.scss";
import fly from "../../img/Fly.svg";

const App = () => (
  <div className={classes.wrapper}>
    <div className={classes.logo}>
      <img src={fly} alt="logo" />
    </div>
    <Main />
  </div>
);

export default App;
