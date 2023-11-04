const PRODUCTS = [];

class Product {
  name;
  value;

  findAll() {
    return PRODUCTS;
  }

  findOne(filter) {
    return PRODUCTS.find(filter);
  }

  insert(product) {
    const data = {
      ...product,
      id: PRODUCTS[PRODUCTS.length - 1]?.id + 1 || 1,
    }

    PRODUCTS.push(data);

    return data;
  }
}

module.exports = Product;