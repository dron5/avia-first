export const getSearchId = (state) => state.filteReduser.searchId;
export const getCheap = (state) => state.filteReduser.cheap;
export const getFast = (state) => state.filteReduser.fast;
export const getSortedTickets = (state) => state.sortedTickets;
export const getTicketsAll = (state) =>
  state.filteReduser.all && state.ticketsReduser.all.length;
export const getTicketsNone = (state) =>
  state.filteReduser.none && state.ticketsReduser.none;
export const getTicketsOne = (state) =>
  state.filteReduser.one && state.ticketsReduser.one;
export const getTicketsTwo = (state) =>
  state.filteReduser.two && state.ticketsReduser.two;
export const getTicketsThree = (state) =>
  state.filteReduser.three && state.ticketsReduser.three;
export const getFetching = (state) => state.filteReduser.isFetching;
export const getStop = (state) => state.ticketsReduser.stop;
