/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';

import { connect } from 'react-redux';
import { Button } from "antd";
// import { fetchTickets } from "../../asyncActions/tickets";
import * as actions from '../../store/actions';

import classes from './Footer.module.scss';

const Footer = ({fetchTickets}) =>(
  <footer className={classes.App__footer}>
    <Button
      type="primary"
      onClick={()=> fetchTickets()}
      className={classes.Footer__btn}>Показать ещё 5 билетов
    </Button>
  </footer>
);

export default connect(null, actions)(Footer);
