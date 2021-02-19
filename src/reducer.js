const initialState = {
  all: false,
  none: false,
  one: false,
  two: false,
  three: false,
  cheap: true,
  fast: false,
  stickets: [],
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL':
      return { ...state, all: !state.all };
    case 'NONE':
      return { ...state, none: !state.none};
    case 'ONE':
      return { ...state, one: !state.one };
    case 'TWO':
      return { ...state, two: !state.two };
    case 'THREE':
      return { ...state, three: !state.three };
    case 'CHEAP':
      return {...state, cheap: true, fast: false};
    case 'FAST':
      return {...state, fast: true, cheap: false};
    default:
      return state;
  }
};

// const reduser = (checkState = {
//    all: false,
//   none: false,
//    one: false,
//    two: false,
//    three: false
// }, action) => {
//   switch (action.type) {
//     case 'ALL':
//       return { ...checkState, all: !checkState.all };
//     case 'NONE':
//       return { ...checkState, none: !checkState.none};
//     case 'ONE':
//       return { ...checkState, one: !checkState.one };
//     case 'TWO':
//       return { ...checkState, two: !checkState.two };
//     case 'THREE':
//       return { ...checkState, three: !checkState.three };
//     default:
//       return checkState;
//   }
// };

export default reduser;