import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import passport from 'passport';
import build from './schema';
import connect from './db/config';
import AuthRouter from './routers/auth';
import 'dotenv/config';

const main = async (): Promise<void> => {
  const schema = await build();

  const app = express();

  if (process.env.NODE_ENV !== 'production') {
    app.use(cors());
  }

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/auth', AuthRouter);

  console.log('Connecting to Mongo DB');
  await connect(() => console.log('Connected!'));

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(
      `Running a GraphQL API server at http://localhost:${PORT}/graphql`,
    );
  });
};

main();
