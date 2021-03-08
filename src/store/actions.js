import { fetchTickets, fetchSearchId } from "../asyncActions/fetchStuff";

export const onClick = (name) => ({ type: name.target.name });

export const addSearchId = () => async (dispatch) => {
  const response = await fetchSearchId();
  dispatch({ type: 'ADD_SEARCH_ID', payload: response });
};

// export const addTickets = (id) => async (dispatch) => {
//   const response = await fetchTickets(id);
//   dispatch({ type: 'ADD_TICKETS', payload: response });
// };

const getFiltered = (tickets) => {
  const data = {};
  data.all = tickets;
  data.none =
    tickets.filter(ticket =>
      (ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0));
  data.one = 
    tickets.filter(ticket =>
      (ticket.segments[0].stops.length === 1 || ticket.segments[1].stops.length === 1));
  data.two = 
    tickets.filter(ticket =>
      (ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2));
  data.three = 
    tickets.filter(ticket =>
      (ticket.segments[0].stops.length === 3 || ticket.segments[1].stops.length === 3));
  return data;
};

export const addTickets = (id) => async (dispatch) => {
  dispatch({type: 'FETCHING', payload: true});
  const response = await fetchTickets(id);
  const { stop }  = response;
  const tickets = getFiltered(response.tickets);
  dispatch({ type: 'ADD_TICKETS', payload: { tickets, stop } });
  dispatch({type: 'FETCHING', payload: false});
};






// export const addSearchId = () => (dispatch) => {
//   fetchSearchId()
//     .then(response => dispatch({ type: 'ADD_SEARCH_ID', payload: response }));  
// };
// export const addTickets = (id) => (dispatch) => {
//   fetchTickets(id)
//     .then(response => dispatch({ type: 'ADD_TICKETS', payload: response }));
// };
// export const addTickets = (payload) => ({ type: 'ADD_TICKETS', payload });
// export const addSearchId = (payload) => ({ type: 'ADD_SEARCH_ID', payload });