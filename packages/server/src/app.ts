import 'reflect-metadata';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';
import connect from './db/config';
import NoteResolver from './resolvers/Note';

const main = async () => {
  const schema = await buildSchema({
    resolvers: [NoteResolver],
    emitSchemaFile: true,
  });

  const app = express();

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  );

  await connect();

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(
      `Running a GraphQL API server at http://localhost:${PORT}/graphql`,
    );
  });
};

main();
