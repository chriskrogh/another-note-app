import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';
import subscribe from './subscribe';

// Export a singleton instance of Relay Environment configured with our network function
export default new Environment({
  network: Network.create(fetchGraphQL, subscribe),
  store: new Store(new RecordSource()),
});
