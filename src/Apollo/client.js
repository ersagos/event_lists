import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://staging-graphql-service.onrewind.tv/graphql',
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "x-account-key": "ryHvne_jFV",
    }
  }
});



export function apolloClient() {
    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
      });

}