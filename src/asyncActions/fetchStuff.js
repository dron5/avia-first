const baseRequest = async (arg) => {
  const response = await fetch(`https://front-test.beta.aviasales.ru${arg}`);
  if (response.status === 500) return baseRequest(arg);
  return response.json();
};

export const fetchSearchId = async () => {
  const response = await baseRequest("/search");
  return response;
};

export const fetchTickets = async (id) => {
  const response = await baseRequest(`/tickets?searchId=${id}`);
  return response;
};
