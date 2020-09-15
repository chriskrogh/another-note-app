export const GRAPHQL_ENDPOINT =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5000/graphql'
    : '/graphql';

const fetchGraphQL = async (params, variables) => {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
};

export default fetchGraphQL;
