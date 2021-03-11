import React from 'react';

import classes from './TicketSegment.module.scss';

const TicketSegment = () => (
  <div className={classes.Ticket__direction}>
        {/* <div className={classes.Ticket__part}>
          <div className={classes.title}>
            {segments[0].origin} - {segments[0].destination}
          </div>
          <div className={classes.Ticket__info}>
            {originTimeTo} - {destinationTimeTo}
          </div>
        </div>
        <div className={classes.Ticket__part}>
          <div className={classes.title}>В ПУТИ</div>
          <div className={classes.Ticket__info}>
            {Math.floor(segments[0].duration / 60)}ч{segments[0].duration % 60}м
          </div>
        </div>
        <div className={classes.Ticket__part}>
          <div className={classes.title}>{countStopsTo}</div>
          <div className={classes.Ticket__info}>{stopsTo}</div>
        </div> */}
      </div>
);

export default TicketSegment;