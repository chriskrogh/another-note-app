import 'reflect-metadata';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';
import HelloWorldResolver from 'resolvers/helloworld';

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
