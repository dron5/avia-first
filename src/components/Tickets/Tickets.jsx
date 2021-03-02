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

  const ticketList = tickets.map((ticket, id) => {
    const { price, carrier, segments } = ticket;
    return (
    <Ticket
      key={carrier+price+id}
      price={price}
      carrier={carrier}
      segments={segments}
    />
    );
});
return (
    <main className={classes.App}>
    {ticketList}
    </main>
  );
};

const mapStateToProps = (state) => ({
  searchId: getSearchId(state),
  tickets: getTickets(state),
});

export default connect(mapStateToProps, fetch)(Tickets);
