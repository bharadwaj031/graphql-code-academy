const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    "This will provide the list of products"
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    updateCategory(id: ID!, input: UpdateCategoryInput!): Category!
    deleteProduct(id: ID!): Boolean!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  input ProductsFilterInput {
    onSale: Boolean
  }

  input AddCategoryInput {
    name: String!
  }

  input UpdateCategoryInput {
    name: String!
  }
  input AddProductInput {
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: String!
  }
`;
