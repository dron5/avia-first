const reduser = (checkState = {
   all: false,
  none: false,
   one: false,
   two: false,
   three: false
}, action) => {
  switch (action.type) {
    case 'ALL':
      return { ...checkState, all: !checkState.all };
    case 'NONE':
      return { ...checkState, none: !checkState.none};
    case 'ONE':
      return { ...checkState, one: !checkState.one };
    case 'TWO':
      return { ...checkState, two: !checkState.two };
    case 'THREE':
      return { ...checkState, three: !checkState.three };
    default:
      return checkState;
  }
};

export default reduser;