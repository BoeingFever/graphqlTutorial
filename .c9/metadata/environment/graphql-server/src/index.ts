{"filter":false,"title":"index.ts","tooltip":"/graphql-server/src/index.ts","undoManager":{"mark":31,"position":31,"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":29},"action":"insert","lines":["console.log('Hey there! 👋');"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":29},"action":"remove","lines":["console.log('Hey there! 👋');"],"id":2},{"start":{"row":0,"column":0},"end":{"row":13,"column":3},"action":"insert","lines":["// src/index.ts","","// 1","import { createServer } from \"@graphql-yoga/node\";","// 2","const port = Number(process.env.API_PORT) || 4000","// 3","const server = createServer({","  port","});","// 4","server.start().then(() => {","  console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);","});"]}],[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"remove","lines":["\""],"id":3}],[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["'"],"id":4}],[{"start":{"row":3,"column":48},"end":{"row":3,"column":49},"action":"remove","lines":["\""],"id":5}],[{"start":{"row":3,"column":48},"end":{"row":3,"column":49},"action":"insert","lines":["'"],"id":6}],[{"start":{"row":3,"column":47},"end":{"row":3,"column":48},"action":"remove","lines":["e"],"id":8},{"start":{"row":3,"column":46},"end":{"row":3,"column":47},"action":"remove","lines":["d"]},{"start":{"row":3,"column":45},"end":{"row":3,"column":46},"action":"remove","lines":["o"]},{"start":{"row":3,"column":44},"end":{"row":3,"column":45},"action":"remove","lines":["n"]},{"start":{"row":3,"column":43},"end":{"row":3,"column":44},"action":"remove","lines":["/"]}],[{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"remove","lines":["@"],"id":9}],[{"start":{"row":3,"column":30},"end":{"row":3,"column":42},"action":"remove","lines":["graphql-yoga"],"id":10},{"start":{"row":3,"column":30},"end":{"row":3,"column":39},"action":"insert","lines":["node:http"]}],[{"start":{"row":6,"column":0},"end":{"row":13,"column":3},"action":"remove","lines":["// 3","const server = createServer({","  port","});","// 4","server.start().then(() => {","  console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);","});"],"id":11},{"start":{"row":6,"column":0},"end":{"row":28,"column":2},"action":"insert","lines":["import { createSchema, createYoga } from 'graphql-yoga'","import { createServer } from 'node:http'","","const yoga = createYoga({","  schema: createSchema({","    typeDefs: /* GraphQL */ `","      type Query {","        hello: String","      }","    `,","    resolvers: {","      Query: {","        hello: () => 'Hello from Yoga!'","      }","    }","  })","})","","const server = createServer(yoga)","","server.listen(4000, () => {","  console.info('Server is running on http://localhost:4000/graphql')","})"]}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":41},"action":"remove","lines":["// 1","import { createServer } from 'node:http';"],"id":12}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""],"id":13},{"start":{"row":0,"column":15},"end":{"row":1,"column":0},"action":"remove","lines":["",""]},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"remove","lines":["s"]}],[{"start":{"row":0,"column":14},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":14},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"remove","lines":["/"]},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"remove","lines":["/"]},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"remove","lines":[" "]},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"remove","lines":["2"]}],[{"start":{"row":1,"column":48},"end":{"row":1,"column":49},"action":"remove","lines":["0"],"id":15},{"start":{"row":1,"column":47},"end":{"row":1,"column":48},"action":"remove","lines":["0"]},{"start":{"row":1,"column":46},"end":{"row":1,"column":47},"action":"remove","lines":["0"]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":46},"action":"remove","lines":["const port = Number(process.env.API_PORT) || 4"],"id":16}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":46},"action":"insert","lines":["const port = Number(process.env.API_PORT) || 4"],"id":17}],[{"start":{"row":4,"column":46},"end":{"row":4,"column":47},"action":"insert","lines":["0"],"id":18},{"start":{"row":4,"column":47},"end":{"row":4,"column":48},"action":"insert","lines":["0"]},{"start":{"row":4,"column":48},"end":{"row":4,"column":49},"action":"insert","lines":["0"]}],[{"start":{"row":22,"column":16},"end":{"row":22,"column":20},"action":"insert","lines":["port"],"id":19}],[{"start":{"row":22,"column":14},"end":{"row":22,"column":22},"action":"remove","lines":["40port00"],"id":20},{"start":{"row":22,"column":14},"end":{"row":22,"column":18},"action":"insert","lines":["port"]}],[{"start":{"row":23,"column":15},"end":{"row":23,"column":16},"action":"remove","lines":["'"],"id":21}],[{"start":{"row":23,"column":15},"end":{"row":23,"column":16},"action":"insert","lines":["`"],"id":22}],[{"start":{"row":23,"column":66},"end":{"row":23,"column":67},"action":"remove","lines":["'"],"id":23}],[{"start":{"row":23,"column":66},"end":{"row":23,"column":67},"action":"insert","lines":["`"],"id":24}],[{"start":{"row":23,"column":57},"end":{"row":23,"column":58},"action":"remove","lines":["0"],"id":25},{"start":{"row":23,"column":56},"end":{"row":23,"column":57},"action":"remove","lines":["0"]},{"start":{"row":23,"column":55},"end":{"row":23,"column":56},"action":"remove","lines":["0"]},{"start":{"row":23,"column":54},"end":{"row":23,"column":55},"action":"remove","lines":["4"]}],[{"start":{"row":23,"column":54},"end":{"row":23,"column":55},"action":"insert","lines":["$"],"id":26},{"start":{"row":23,"column":55},"end":{"row":23,"column":56},"action":"insert","lines":["{"]},{"start":{"row":23,"column":56},"end":{"row":23,"column":57},"action":"insert","lines":["}"]}],[{"start":{"row":23,"column":56},"end":{"row":23,"column":57},"action":"insert","lines":["p"],"id":27},{"start":{"row":23,"column":57},"end":{"row":23,"column":58},"action":"insert","lines":["o"]},{"start":{"row":23,"column":58},"end":{"row":23,"column":59},"action":"insert","lines":["r"]},{"start":{"row":23,"column":59},"end":{"row":23,"column":60},"action":"insert","lines":["t"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":14},"action":"remove","lines":["// src/index.t"],"id":28},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":1,"column":40},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":29}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":34},"action":"insert","lines":["import { schema } from \"./schema\";"],"id":30}],[{"start":{"row":5,"column":8},"end":{"row":16,"column":4},"action":"remove","lines":[": createSchema({","    typeDefs: /* GraphQL */ `","      type Query {","        hello: String","      }","    `,","    resolvers: {","      Query: {","        hello: () => 'Hello from Yoga!'","      }","    }","  })"],"id":32}],[{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":[","],"id":33}],[{"start":{"row":6,"column":2},"end":{"row":6,"column":3},"action":"insert","lines":[";"],"id":34}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":12,"column":2},"end":{"row":12,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":6,"state":"start","mode":"ace/mode/typescript"}},"timestamp":1680252214317,"hash":"d99bf1a5ddbb729e873a58ab12f1d52563efc5d3"}