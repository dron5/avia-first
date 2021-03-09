/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import * as fetch from '../../store/actions';
import Ticket from '../Ticket';
import loading from '../../img/loading.gif';
import classes from './Tickets.module.scss';
import {
  getSearchId, getTicketsAll, getTicketsNone, getTicketsOne,
  getTicketsTwo, getTicketsThree, getStop, getCheap, getFetching
} from '../../store/selectors';

const Tickets = ({
  searchId, addSearchId, addTickets, ticketsAll, isFetching,
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
  const tickets = [...(ticketsNone || []), ...(ticketsOne || []), ...(ticketsTwo || []), ...(ticketsThree || [])];
  // console.log(stop);
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
    <div className={classes.Header__img}>  
    {isFetching ? 
            <img src={loading} alt="loading" />
        : null}
    {!tickets.length && <span>Рейсов, подходящих под заданные фильтры, не найдено</span>}
    </div> 
    {rendTicketList}
    { !(!tickets.length) &&
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
  isFetching: getFetching(state),
  stop: getStop(state),
});
// reselect
export default connect(mapStateToProps, fetch)(Tickets);
