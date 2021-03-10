/* eslint-disable react/prop-types */
import React from "react";

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
  const stopsTo = segments[0].stops.join(" ");
  const stopsFrom = segments[1].stops.join(" ");
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
  const countStopsTo = stops(segments[0].stops.length);
  const countStopsBack = stops(segments[1].stops.length);
  return (
    <div className={classes.Ticket}>
      <div className={classes.Ticket__price}>
        <span>{price} Р</span>
        <span>
          <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="LogoAvia" />
        </span>
      </div>
      <div className={classes.Ticket__direction}>
        <div className={classes.Ticket__part}>
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
        </div>
      </div>
      <div className={classes.Ticket__direction}>
        <div className={classes.Ticket__part}>
          <div className={classes.title}>
            {segments[1].origin} - {segments[1].destination}
          </div>
          <div className={classes.Ticket__info}>
            {originTimeBack} - {destinationTimeBack}
          </div>
        </div>
        <div className={classes.Ticket__part}>
          <div className={classes.title}>В ПУТИ</div>
          <div className={classes.Ticket__info}>
            {Math.floor(segments[1].duration / 60)}ч{segments[1].duration % 60}м
          </div>
        </div>
        <div className={classes.Ticket__part}>
          <div className={classes.title}>{countStopsBack}</div>
          <div className={classes.Ticket__info}>{stopsFrom}</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
