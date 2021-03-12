export const ticketFilter = (digit) => (ticket) => (
  (ticket.segments[0].stops.length === digit &&
    ticket.segments[1].stops.length < digit) ||
  (ticket.segments[1].stops.length === digit &&
    ticket.segments[0].stops.length < digit)
);

export const getFiltered = (tickets) => {
  const data = {};
  data.all = tickets;
  data.none = tickets.filter(
    (ticket) =>
      ticket.segments[0].stops.length === 0 &&
      ticket.segments[1].stops.length === 0
  );
  data.one = tickets.filter(ticketFilter(1));
  data.two = tickets.filter(ticketFilter(2));
  data.three = tickets.filter(ticketFilter(3));
  return data;
};
