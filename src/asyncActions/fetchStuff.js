/* eslint-disable import/prefer-default-export */

import { addSearchId, addTickets } from "../store/actions";

export const fetchSearchId = () => (dispatch) => {
    fetch('https://front-test.beta.aviasales.ru/search')
      .then((response) => response.json())
      .then(json => dispatch(addSearchId(json)));
};
  
export const fetchTickets = (id) => (dispatch) => {
  fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
    .then((response) => response.json())
    .then(json => dispatch(addTickets(json.tickets)));
};