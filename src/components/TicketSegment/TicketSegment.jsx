/* eslint-disable */
import React from "react";

import classes from "./TicketSegment.module.scss";

const TicketSegment = ({
  originTime,
  duration,
  origin,
  destination,
  destinationTime,
  countStops,
  stops,
}) => (
  <div className={classes.ticket__direction}>
    <div className={classes.ticket__part}>
      <div className={classes.title}>
        {origin} - {destination}
      </div>
      <div className={classes.ticket__info}>
        {originTime} - {destinationTime}
      </div>
    </div>
    <div className={classes.ticket__part}>
      <div className={classes.title}>В ПУТИ</div>
      <div className={classes.ticket__info}>
        {Math.floor(duration / 60)}ч{duration % 60}м
      </div>
    </div>
    <div className={classes.ticket__part}>
      <div className={classes.title}>{countStops}</div>
      <div className={classes.ticket__info}>{stops}</div>
    </div>
  </div>
);

export default TicketSegment;
