/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from "antd";
// import { connect } from 'react-redux';
// import * as fetch from "../../asyncActions/fetchStuff";

import classes from './Footer.module.scss';

const Footer = () => (
    <footer className={classes.App__footer}>
      <Button
        type="primary"
        onClick={() => {}}
        className={classes.Footer__btn}>Показать ещё 5 билетов
      </Button>
    </footer>
  );

export default Footer;
// export default connect(mapStateToProps, fetch)(Footer);
