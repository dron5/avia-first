/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from "react";
import Ticket from "../Ticket";

const Tickets = ({ tickets }) => {
  let ticketList = [];
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
  return [...ticketList];
};
export default Tickets;
