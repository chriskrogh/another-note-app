import type { FetchFunction } from 'relay-runtime';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const graphqlEndpoint =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/graphql'
    : '/graphql';

const fetchQuery: FetchFunction = async (request, variables) => {
  const response = await fetch(graphqlEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });
  return response.json();
};

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
