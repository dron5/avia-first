/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from "antd";

import * as fetch from "../../store/actions";
import Ticket from "../Ticket";
import classes from './Tickets.module.scss';
import {
  getSearchId, getTicketsAll, getTicketsNone, getTicketsOne,
  getTicketsTwo, getTicketsThree, getStop, getCheap
} from '../../store/selectors';

const Tickets = ({
  searchId, addSearchId, addTickets, ticketsAll,
  ticketsNone, ticketsTwo, ticketsThree, ticketsOne, stop, cheap }) => {
  
  const [slice, setSlice] = useState(5);
  useEffect(() => {
    // if (ticketsAll===false) setSlice(5); ///если нужен сброс до 5 билетов
    if (!searchId) addSearchId();
    if (!stop && searchId !== '') addTickets(searchId);
  }, [searchId, stop, addSearchId, addTickets, ticketsAll, slice]);
  
  const showMoreTickets = () => {
    setSlice(slice + 5);
  };
  let ticketList = [];
  let tickets = [];
  const stopsNone = ticketsNone || [];
  const stopsOne = ticketsOne || [];
  const stopsTwo = ticketsTwo || [];
  const stopsThree = ticketsThree || [];
  
  tickets = [...stopsNone, ...stopsOne, ...stopsTwo, ...stopsThree];

  if ((tickets)) {
    if (cheap) {
      ticketList = tickets.sort((prev, next) => prev.price - next.price);
    } else {
      ticketList = tickets.sort((prev, next) =>
        (prev.segments[0].duration + (prev.segments[1].duration) -
        (next.segments[0].duration + next.segments[0].duration)));
    }
    ticketList = ticketList.map((ticket, id) => {
      const { price, carrier, segments } = ticket;
      return (
        <Ticket
          key={carrier + price + id}
          price={price}
          carrier={carrier}
          segments={segments}
        />
      );
    });
  }
  const rendTicketList = ticketList.slice(0, slice);
return (
    <main className={classes.App}>
    {rendTicketList}
    {ticketsAll &&
      <Button
        type="primary"
        onClick={showMoreTickets}
        className={classes.Footer__btn}>Показать ещё 5 билетов
      </Button>}
    </main>
  );
};

const mapStateToProps = (state) => ({
  searchId: getSearchId(state),
  cheap: getCheap(state),
  ticketsAll: getTicketsAll(state),
  ticketsNone: getTicketsNone(state),
  ticketsOne: getTicketsOne(state),
  ticketsTwo: getTicketsTwo(state),
  ticketsThree: getTicketsThree(state),
  stop: getStop(state),
});
// reselect
export default connect(mapStateToProps, fetch)(Tickets);
