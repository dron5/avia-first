/* eslint-disable import/prefer-default-export */
import { onAddTickets } from "../store/actions";

export const fetchTickets = (dispatch) => {
  fetch('')
    .then(response => response.json())
    .then(json => dispatch(onAddTickets(json)));
};
