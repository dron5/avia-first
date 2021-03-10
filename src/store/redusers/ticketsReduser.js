const initState = {
  all: [],
  none: [],
  one: [],
  two: [],
  three: [],
  stop: false,
};

const ticketsReduser = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TICKETS":
      return {
        ...state,
        all: [...state.all, ...action.payload.tickets.all],
        stop: action.payload.stop,
        none: [...state.none, ...action.payload.tickets.none],
        one: [...state.one, ...action.payload.tickets.one],
        two: [...state.two, ...action.payload.tickets.two],
        three: [...state.three, ...action.payload.tickets.three],
      };
    default:
      return state;
  }
};

export default ticketsReduser;
