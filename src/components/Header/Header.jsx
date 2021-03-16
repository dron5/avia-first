/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { getCheap, getFast } from "../../store/selectors";

import classes from "./Header.module.scss";

const Header = ({ cheap, fast, onClick }) => (
  <header className={classes.header}>
    <button
      type="button"
      name="CHEAP"
      onClick={onClick}
      className={
        cheap
          ? `${classes["header__btn-cheap"]} ${classes.btn__active}`
          : `${classes["header__btn-cheap"]}`
      }
    >
      Самый дешёвый
    </button>
    <button
      onClick={onClick}
      type="button"
      name="FAST"
      className={
        fast
          ? `${classes["header__btn-fast"]} ${classes.btn__active}`
          : `${classes["header__btn-fast"]}`
      }
    >
      Самый быстрый
    </button>
  </header>
);

const mapStateToProps = (state) => ({
  cheap: getCheap(state),
  fast: getFast(state),
});

export default connect(mapStateToProps, actions)(Header);
