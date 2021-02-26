import React from 'react';

import classes from './Ticket.module.scss';

const Ticket = () =>( 
  <div className={classes.Ticket}>
    <div className={classes.Ticket__price}>
      <span>price</span>
      <span>carrier</span>
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
);

export default Ticket;