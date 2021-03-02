export const getSearchId = (state) => state.reduser.searchId;
export const getSortedTickets = (state) => state.sortedTickets;
// export const getTickets = (state) => state.tickets.all;
export const getTickets = (state) => state.reduser.all && state.tickets.all;
  