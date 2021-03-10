/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from "antd";

import classes from './Footer.module.scss';

const Footer = ({showMoreTickets}) => (
    <footer className={classes.footer}>
      <Button
        type="primary"
        onClick={showMoreTickets}
        className={classes.btn__footer}>Показать ещё 5 билетов
      </Button>
    </footer>
  );

export default Footer;
