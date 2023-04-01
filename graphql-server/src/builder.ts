// src/builder.ts

import SchemaBuilder from "@pothos/core";
// 1
import { DateResolver } from "graphql-scalars";
import PrismaPlugin from "@pothos/plugin-prisma";
import { prisma } from "./db";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
// 2
export const builder = new SchemaBuilder<{
  Scalars: {
    Date: { Input: Date; Output: Date };
  };
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

// 3
builder.addScalarType("Date", DateResolver, {});
builder.queryType({});