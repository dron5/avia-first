/* eslint-disable react/prop-types */
import React from "react";

import TicketSegment from "../TicketSegment";
import classes from "./Ticket.module.scss";

const Ticket = ({ price, carrier, segments }) => {
  const originTimeTo = new Date(segments[0].date).toTimeString().slice(0, 5);
  const destinationTimeTo = new Date(
    Date.parse(segments[0].date) + segments[0].duration * 60000
  )
    .toTimeString()
    .slice(0, 5);
  const originTimeBack = new Date(segments[1].date).toTimeString().slice(0, 5);
  const destinationTimeBack = new Date(
    Date.parse(segments[0].date) + segments[1].duration * 60000
  )
    .toTimeString()
    .slice(0, 5);
  const stops = (args) => {
    switch (args) {
      case 1:
        return "1 ПЕРЕСАДКА";
      case 2:
        return "2 ПЕРЕСАДКИ";
      case 3:
        return "3 ПЕРЕСАДКИ";
      default:
        return "0 ПЕРЕСАДОК";
    }
  };
  
  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__price}>
        <span>{price} Р</span>
        <span>
          <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="LogoAvia" />
        </span>
      </div>
      <TicketSegment
        countStops={stops(segments[0].stops.length)}
        duration={segments[0].duration}
        stops={segments[0].stops.join(" ")}
        origin={segments[0].origin}
        originTime={originTimeTo}
        destinationTime={destinationTimeTo}
        destination={segments[0].destination}
      />
      <TicketSegment
        countStops={stops(segments[1].stops.length)}
        duration={segments[1].duration}
        stops={segments[1].stops.join(" ")}
        origin={segments[1].origin}
        originTime={originTimeBack}
        destinationTime={destinationTimeBack}
        destination={segments[1].destination}
      />
    </div>
  );
};

export default React.memo(Ticket);
