export const onClick = (name) => ({ type: name.target.name });
export const onAddTickets = (payload) => ({ type: 'ADD_SEARCH_ID', payload });
export const fetchTickets = () => (dispatch) => {
    fetch('https://front-test.beta.aviasales.ru/search')
      .then((response) => response.json())
      .then(json => {
        console.log(json);
        dispatch(onAddTickets(json));
      });
  };