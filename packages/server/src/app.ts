import type { Request, Response } from 'express';

import 'reflect-metadata';
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import path from 'path';
import passport from 'passport';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import build from './schema';
import connect from './config/db';
import configure from './config/passport';
import routers from './routers';
import 'dotenv/config';

const main = async (): Promise<void> => {
  const schema = await build();
  const app = express();

  app.use(
    session({
      secret: process.env.APP_SECRET || 'secret',
      resave: false,
      saveUninitialized: true,
    }),
  );

  // allow cross origin reqs from client in development
  if (process.env.NODE_ENV !== 'production') {
    app.use(
      cors({
        origin: /http:\/\/localhost:(3000|6006)/,
      }),
    );
  }

  // create graphql endpoint
  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  );

  // configure passport
  app.use(passport.initialize());
  app.use(passport.session());
  configure(passport);

  app.use('/api', routers);

  console.log('Connecting to Mongo DB');
  await connect(() => console.log('Connected!'));

  // set client directory
  const CLIENT_DIR = path.join(__dirname, '..', '..', 'client', 'build');

  // Serve static files from the React app
  app.use(express.static(CLIENT_DIR));
  app.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.join(CLIENT_DIR, 'index.html'));
  });

  // Create WebSocket listener server
  const websocketServer = createServer((_req, res) => {
    res.writeHead(404);
    res.end();
  });

  // Bind it to port and start listening
  const WS_PORT = 4000;
  websocketServer.listen(WS_PORT, () =>
    console.log(`Running WS server on ws://localhost:${WS_PORT}`),
  );

  SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: websocketServer, path: '/ws' },
  );

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Running server http://localhost:${PORT}`);
  });
};

main();
