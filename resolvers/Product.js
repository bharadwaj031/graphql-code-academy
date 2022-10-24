exports.Product = {
  category: (p, a, { db: { categories } }) => {
    return categories.find((category) => {
      return category.id === p.categoryId;
    });
  },
};
