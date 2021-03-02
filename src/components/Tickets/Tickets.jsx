/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as fetch from "../../asyncActions/fetchStuff";
import Ticket from "../Ticket";
import classes from './Tickets.module.scss';
import { getSearchId, getTickets } from '../../store/selectors';

const Tickets = ({ searchId, fetchSearchId, fetchTickets, tickets }) => {
  useEffect(() => {
    if (!searchId) fetchSearchId();
    if (searchId !=='') fetchTickets(searchId);
  }, [searchId, fetchSearchId, fetchTickets]);
  let ticketList = [];
  if (tickets) {
    ticketList = tickets.map((ticket, id) => {
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
  const rendTicketList = ticketList.slice(0, 5);
return (
    <main className={classes.App}>
    {rendTicketList}
    </main>
  );
};

const mapStateToProps = (state) => ({
  searchId: getSearchId(state),
  tickets: getTickets(state),
});
// reselect
export default connect(mapStateToProps, fetch)(Tickets);
