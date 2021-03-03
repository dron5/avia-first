export const getSearchId = (state) => state.reduser.searchId;
export const getCheap = (state) => state.reduser.cheap;
export const getSortedTickets = (state) => state.sortedTickets;
export const getTicketsAll = (state) => state.reduser.all && state.tickets.all;
export const getTicketsNone = (state) => state.reduser.none && state.tickets.none;
export const getTicketsOne = (state) => state.reduser.one && state.tickets.one;
export const getTicketsTwo = (state) => state.reduser.two && state.tickets.two;
export const getTicketsThree = (state) => state.reduser.three && state.tickets.three;
export const getStop = (state) => state.tickets.stop;