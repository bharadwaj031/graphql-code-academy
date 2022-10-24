const { v4: uuid } = require("uuid");

exports.Mutation = {
  addCategory: (p, a, c) => {
    const { categories } = c.db;
    const {
      input: { name },
    } = a;
    const newCategory = {
      id: uuid(),
      name: name,
    };
    categories.push(newCategory);
    return newCategory;
  },
  addProduct: (p, a, c) => {
    const { products } = c.db;
    const {
      input: { name, image, price, onSale, quantity, categoryId },
    } = a;
    const newProduct = {
      id: uuid(),
      name,
      image,
      price,
      onSale,
      quantity,
      categoryId,
    };
    products.push(newProduct);
    return newProduct;
  },
  deleteCategory: (p, { id }, { db }) => {
    db.categories = db.categories.filter((cat) => cat.id !== id);
    db.products = db.products.filter((product) => product.categoryId !== id);
    // db.products = db.products.map((product) => {
    //   if (product.categoryId === id)
    //     return {
    //       ...product,
    //       categoryId: null,
    //     };
    //   else {
    //     return product;
    //   }
    // });
    return true;
  },
  updateCategory: (p, { id, input }, { db }) => {
    const index = db.categories.findIndex((category) => category.id === id);
    console.log(index);
    db.categories[index] = {
      ...db.categories[index],
      ...input,
    };
    return db.categories[index];
  },
};
