export const getSearchId = (state) => state.filteReduser.searchId;
export const getCheap = (state) => state.filteReduser.cheap;
export const getSortedTickets = (state) => state.sortedTickets;
export const getTicketsAll = (state) => state.filteReduser.all && state.tickets.all;
export const getTicketsNone = (state) => state.filteReduser.none && state.tickets.none;
export const getTicketsOne = (state) => state.filteReduser.one && state.tickets.one;
export const getTicketsTwo = (state) => state.filteReduser.two && state.tickets.two;
export const getTicketsThree = (state) => state.filteReduser.three && state.tickets.three;
export const getStop = (state) => state.tickets.stop;