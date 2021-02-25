import React from 'react';

import { Button } from "antd";

import classes from './Footer.module.scss';

const Footer = () =>(
  <footer className={classes.App__footer}>
    <Button
      type="primary"
      className={classes.Footer__btn}>Показать ещё 5 билетов
    </Button>
  </footer>
);

export default Footer;