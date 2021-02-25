const initialState = {
  all: false,
  none: false,
  one: false,
  two: false,
  three: false,
  cheap: true,
  fast: false,
  tickets: [],
  searchId: '',
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

const allReduser = (state) => {
  const enumerate = ['all', 'none', 'one', 'two', 'three']
    .reduce((acc, el) => ({ ...acc, [el]: !state.all }), {});
  return enumerate;
};

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
    case 'ADD_TICKETS':
      return { ...state, tickets: [...state.tickets, ...action.payload] };
    case 'ADD_SEARCH_ID':
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default reduser;