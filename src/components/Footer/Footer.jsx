/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';

import { connect } from 'react-redux';
import { Button } from "antd";
import * as fetch from "../../asyncActions/fetchStuff";

import classes from './Footer.module.scss';

const Footer = ({fetchSearchId}) =>(
  <footer className={classes.App__footer}>
    <Button
      type="primary"
      onClick={()=> fetchSearchId()}
      className={classes.Footer__btn}>Показать ещё 5 билетов
    </Button>
  </footer>
);

export default connect(null, fetch)(Footer);
