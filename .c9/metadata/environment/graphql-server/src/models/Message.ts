{"filter":false,"title":"Message.ts","tooltip":"/graphql-server/src/models/Message.ts","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":10,"column":3},"action":"insert","lines":["import { builder } from \"../builder\";","","builder.prismaObject(\"Message\", {","  fields: (t) => ({","    id: t.exposeID(\"id\"),","    body: t.exposeString(\"body\"),","    createdAt: t.expose(\"createdAt\", {","      type: \"Date\",","    }),","  }),","});"],"id":1}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"remove","lines":["("],"id":2}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"remove","lines":[")"],"id":3}],[{"start":{"row":8,"column":6},"end":{"row":8,"column":7},"action":"remove","lines":[","],"id":6}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":3,"column":16},"end":{"row":3,"column":16},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1680247835616,"hash":"a7bfa3a465794724783ecd4775910679ddf491da"}