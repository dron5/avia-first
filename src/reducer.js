/* eslint-disable no-unused-vars */
const initialState = {
  all: false,
  none: false,
  one: false,
  two: false,
  three: false,
  cheap: true,
  fast: false,
  tickets: [],
};

const enumReduser = (state, action) => 
   ({ ...state, [action.type.toLowerCase()]: !state[action.type.toLowerCase()] })
;
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
      return enumReduser(state, action);
    case 'CHEAP':
      return {...state, cheap: true, fast: false};
    case 'FAST':
      return {...state, fast: true, cheap: false};
    default:
      return state;
  }
};

export default reduser;