const baseRequest = async (arg) => {
  const response = await fetch(`https://front-test.beta.aviasales.ru${arg}`);
  if (response.status === 500) return baseRequest(arg);
  return response.json();
};

export const fetchSearchId = async () => {
  const response = await baseRequest('/search');
  return response;
};
  
export const fetchTickets = async (id) => {
  const response = await baseRequest(`/tickets?searchId=${id}`);
  return response;
};




// export const fetchTickets = (id) => async (dispatch) => {
//   const response = await baseRequest(`/tickets?searchId=${id}`);
//   dispatch(addTickets(response)); // вынести dispatch
// };

// export const fetchTickets = (id) => (dispatch) => {
//   fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
//     .then((response) => response.json())
//     .then(json => dispatch(addTickets(json.tickets)));
// };
// export const fetchSearchId = () => (dispatch) => {
//     fetch('https://front-test.beta.aviasales.ru/search')
//       .then((response) => response.json())
//       .then(json => dispatch(addSearchId(json)));
// };