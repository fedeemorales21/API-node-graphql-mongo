import { config } from 'dotenv'
config()

import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { conn } from './db'
import schema from './gql/schema'

const app = express()
conn() 

app.set('port' , process.env.PORT || 4000)


app.use('/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.listen( app.get('port'), () => { console.log('Server on port', app.get('port')) } )