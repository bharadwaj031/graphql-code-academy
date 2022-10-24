exports.Query = {
  products: (p, a, { db: { products } }) => {
    let filteredProducts = products;
    if (a.filter && a.filter.onSale === true) {
      filteredProducts = filteredProducts.filter((product) => product.onSale);
    }
    return filteredProducts;
  },
  product: (parent, args, { db: { products } }) => {
    return products.find((product) => product.id === args.id);
  },
  categories: (p, a, { db: { categories } }) => categories,
  category: (parent, args, { db: { categories } }) => {
    return categories.find((category) => category.id === args.id);
  },
};
