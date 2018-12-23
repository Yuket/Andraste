import { gql } from 'apollo-server-koa'

export const typeDef = gql`
  type Query {
    hello: String
  }
`
export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

export default { typeDef, resolvers }
