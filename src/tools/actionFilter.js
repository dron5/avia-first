export const ticketFilter = (digit) => (ticket) => (
  (ticket.segments[0].stops.length === digit &&
    ticket.segments[1].stops.length < digit) ||
  (ticket.segments[1].stops.length === digit &&
    ticket.segments[0].stops.length < digit)
);

export default ticketFilter;