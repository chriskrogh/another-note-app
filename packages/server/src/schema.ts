import type { GraphQLSchema } from 'graphql';

import { buildSchema } from 'type-graphql';
import NoteResolver from './resolvers/Note';

const build = async (): Promise<GraphQLSchema> =>
  await buildSchema({
    resolvers: [NoteResolver],
    emitSchemaFile: true,
  });

export default build;
