/* eslint-disable import/prefer-default-export */

// import { onAddTickets } from "../store/actions";

// export const fetchTickets = (dispatch) => {
//   fetch('https://front-test.beta.aviasales.ru/search')
//     .then(response => response.json())
//     .then(json => dispatch(onAddTickets(json)));
// };
// export const fetchTickets = (arg) => (dispath) => {
//     fetch('https://front-test.beta.aviasales.ru/search')
//       .then((response) => response.json())
//       .then((json) => dispatch(onAddTickets(json)));
//   };
// export const fetchTickets = () => (dispatch) => {
//     fetch('https://front-test.beta.aviasales.ru/search')
//       .then((response) => response.json())
//       // .then(json => dispatch({ type: 'SOME', json }));
//       .then(json => dispatch(onAddTickets(json)));
//   };