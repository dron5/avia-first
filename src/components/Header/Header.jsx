/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import classes from './Header.module.scss';

const Header = ({ cheap, fast, onCheap, onFast }) => (
    <header className={classes.App__header}>
      <button
        type="button"
        onClick={onCheap}
        className={cheap ?
          `${classes['Header__btn-cheap']} ${classes.btn__active}`
          : `${classes['Header__btn-cheap']}`}>
        Самый дешёвый
      </button>
      <button
        onClick={onFast}
        type="button"
        className={fast ?
          `${classes['Header__btn-fast']} ${classes.btn__active}`
          : `${classes['Header__btn-fast']}`}>
        Самый быстрый
    </button>
    </header>
  );

const mapStateToProps = (state) => ({
  cheap: state.cheap,
  fast: state.fast,
  });

export default connect(mapStateToProps, actions)(Header);