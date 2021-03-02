import { combineReducers } from 'redux';

const initialState = {
  all: false,
  none: false,
  one: false,
  two: false,
  three: false,
  cheap: true,
  fast: false,
  searchId: '',
};

const initState = {
  all: [],
  none: [],
  one: [],
  two: [],
  three: [],
};

const tickets = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TICKETS':
      return {...state, all: [...state.all, ...action.payload] };
    default:
      return state;
  }
};

const enumReduser = (state, action) => {
  const { none, one, two, three } = state;
  const enumList = {
    none, one, two, three, 
    [action.type.toLowerCase()]: !state[action.type.toLowerCase()]
  };
  const answer = Object.values(enumList).filter(el => el === true);
  if (!(answer.length === 0) && !(answer.length === 4)) {
    return  { ...enumList, all: false };
  } 
  return { ...enumList, all: enumList.none}; 
 };

const allReduser = (state) => 
   ['all', 'none', 'one', 'two', 'three']
    .reduce((acc, el) => ({ ...acc, [el]: !state.all }), {});

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL':
      return { ...state, ...allReduser(state) };
    case 'NONE':
    case 'ONE':
    case 'TWO':
    case 'THREE':
      return { ...state, ...enumReduser(state, action) };
    case 'CHEAP':
      return {...state, cheap: true, fast: false};
    case 'FAST':
      return { ...state, fast: true, cheap: false };
    case 'ADD_SEARCH_ID':
      return {...state, ...action.payload};
    default:
      return state;
  }
};

const rootReduser = combineReducers({
  tickets,
  reduser
});
// const rootReduser = (state = {}, action) => ({
//     tickets: tickets(state.tickets, action),
//     reduser: reduser(state.reduser, action)
//   });

export default rootReduser;