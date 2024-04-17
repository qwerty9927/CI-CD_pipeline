import { buildSchema } from "graphql"
import { graphqlHTTP } from "express-graphql"
import express from "express"
import { getUser, getUsers } from "./src/gql/resolver"

const schema = buildSchema(`
  input UserInput {
    email: String!
    name: String!
  }

  type User {
    id: Int!
    name: String!
    email: String!
  }
  
  type Query {
    getUser(id: Int): User
    getUsers: [User]
  }
`)

const app = express()
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: {
      getUser,
      getUsers,
    },
    graphiql: true,
  })
)

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`)
})
