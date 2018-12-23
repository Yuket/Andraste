import * as Koa from 'koa'
import * as Router from 'koa-router'
import { ApolloServer } from 'apollo-server-koa'
import { typeDefs, resolvers } from './graphql'
import { log } from './middleware'
import { hello } from './routes'

const app = new Koa()

const router = new Router()
router.get('/*', hello)

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

app.use(log)
app.use(router.routes())

app.listen(3000)

console.log('Server running on port 3000')
