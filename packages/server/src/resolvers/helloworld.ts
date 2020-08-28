import { Resolver, Query } from 'type-graphql';

@Resolver()
class HelloWorldResolver {
  @Query(() => String)
  async hello(): Promise<string> {
    return 'Hello World!';
  }
}

export default HelloWorldResolver;
