/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as fetch from "../../asyncActions/fetchStuff";
import classes from './Tickets.module.scss';

const Tickets = ({ searchId, fetchSearchId }) => {
useEffect(() => {
    if (!searchId) fetchSearchId();
  }, [searchId,fetchSearchId]); 
return (
    <main className={classes.App}>
      <div className={classes.Ticket}>
        <div className={classes.Ticket__price}>
          <span>Price</span>
          <span>Logo</span>
        </div>
        <div className={classes.Ticket__direction}>
          <div>
            <div className={classes.title}>MOW - HKT</div>
            <div>2:6 - 22:45</div>
          </div>
          <div>
            <div className={classes.title}>В ПУТИ</div>
            <div>20ч39мин</div>
          </div>
          <div>
            <div className={classes.title}>2 ПЕРЕСАДКИ</div>
            <div>DXB JNB</div>
          </div>
        </div>  
        <div className={classes.Ticket__direction}>
          <div>
            <div className={classes.title}>HKT - MOW</div>
            <div>2:6 - 22:45</div>
          </div>
          <div>
            <div className={classes.title}>В ПУТИ</div>
            <div>20ч39мин</div>
          </div>
          <div>
            <div className={classes.title}>2 ПЕРЕСАДКИ</div>
            <div>JNB - DXB</div>
          </div>
        </div>
      </div>
    </main>
  );
};
const mapStateToProps = (state) => ({
  searchId: state.searchId,
});

export default connect(mapStateToProps, fetch)(Tickets);