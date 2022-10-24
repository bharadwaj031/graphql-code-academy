exports.Category = {
  products: (p, a, { db: { products } }) => {
    return products.filter((product) => product.categoryId === p.id);
  },
};
