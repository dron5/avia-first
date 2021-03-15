export const stopsFilter = (stops) => (ticket) =>
  (ticket.segments[0].stops.length === stops &&
    ticket.segments[1].stops.length < stops) ||
  (ticket.segments[1].stops.length === stops &&
    ticket.segments[0].stops.length < stops);

export const getFilteredTickets = (tickets) => {
  const data = {};
  data.all = tickets;
  data.none = tickets.filter(
    (ticket) =>
      ticket.segments[0].stops.length === 0 &&
      ticket.segments[1].stops.length === 0
  );
  data.one = tickets.filter(stopsFilter(1));
  data.two = tickets.filter(stopsFilter(2));
  data.three = tickets.filter(stopsFilter(3));
  return data;
};
