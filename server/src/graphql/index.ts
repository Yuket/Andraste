import user from './user'

export const resolvers = {
  ...user.resolvers,
}

export const typeDefs = [user.typeDef]
