import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import classes from './Header.module.scss';

const Header = () => (
  <header className={classes.App__header}>
    <button type="button" className={classes['Header__btn-cheap']}>Самый дешёвый</button>
    <button type="button" className={classes['Header__btn-fast']}>Самый быстрый</button>
  </header>
);

const mapStateToProps = (checkState) => ({
  all: checkState.all,
  none: checkState.none,
  one: checkState.one,
  two: checkState.two,
  three: checkState.three
  });

export default connect(mapStateToProps, actions)(Header);