import { fetchTickets, fetchSearchId } from "../asyncActions/fetchStuff";
import { ticketFilter } from "../tools/actionFilter";

export const onClick = (name) => ({ type: name.target.name });

export const addSearchId = () => async (dispatch) => {
  const response = await fetchSearchId();
  dispatch({ type: "ADD_SEARCH_ID", payload: response });
};

const getFiltered = (tickets) => {
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

export const addTickets = (id) => async (dispatch) => {
  dispatch({ type: "FETCHING", payload: true });
  const response = await fetchTickets(id);
  const { stop } = response;
  const tickets = getFiltered(response.tickets);
  dispatch({ type: "ADD_TICKETS", payload: { tickets, stop } });
  dispatch({ type: "FETCHING", payload: false });
};
