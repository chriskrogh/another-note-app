import 'reflect-metadata';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';
import HelloWorldResolver from 'resolvers/helloworld';
import { add } from '@relay/shared';

console.log(add(2, 3));

const main = async () => {
  const schema = await buildSchema({
    resolvers: [HelloWorldResolver],
  });
  const app = express();
  const PORT = 5000;

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
    }),
  );

  app.listen(PORT);
  console.log(
    `Running a GraphQL API server at http://localhost:${PORT}/graphql`,
  );
};

main();
