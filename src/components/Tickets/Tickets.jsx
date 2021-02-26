/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as fetch from "../../asyncActions/fetchStuff";
import Ticket from "../Ticket";
import classes from './Tickets.module.scss';

const Tickets = ({ searchId, fetchSearchId, fetchTickets, tickets }) => {
useEffect(() => {
    if (!searchId) fetchSearchId();
}, [searchId, fetchSearchId]);

useEffect(() => {
    if (searchId) fetchTickets(searchId);
}, [searchId, fetchTickets]);  
console.log('inTickets :', tickets);
return (
    <main className={classes.App}>
      <Ticket />
    </main>
  );
};
const mapStateToProps = (state) => ({
  searchId: state.searchId,
  tickets: state.tickets,
});

export default connect(mapStateToProps, fetch)(Tickets);