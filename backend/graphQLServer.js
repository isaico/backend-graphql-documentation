import 'dotenv/config';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
// import cors from 'cors';
import { SchemaProducts } from './graphQL/schemaProducts.graphQL.js';
import 'dotenv/config';
import {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
} from './graphQL/resolver/index.js';
const app = express();
const PORT = process.env.PORT || 8080;

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  '/productos',
  graphqlHTTP({
    schema: SchemaProducts,
    rootValue: {
      getProducts,
      getProductById,
      addProduct,
      deleteProduct,
      updateProduct,
    },
    graphiql: true,
  })
);

const server = app.listen(PORT, () => {
  console.log(`🚀 🚀 server is runing at http://localhost:${PORT} 🔥`);
});

server.on('error', (err) => {
  console.log(err);
});
