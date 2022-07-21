// import models
const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');


Product.associate = (models) => {
  // Products belongsTo Category
  Product.belongsTo(models.Category, {
    foreignKey: 'category_id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  });
  Product.hasMany(models.ProductTag);
};


Category.associate = (models) => {
  // Categories have many Products
  Category.hasMany(models.Product);
}


Tag.associate = (models) => {
  Tag.hasMany(models.ProductTag);
}


ProductTag.associate = (models) => {
  // Products belongToMany Tags (through ProductTag)
  ProductTag.belongsToMany(models.Product, {
    foreignKey: 'product_id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  });
  // Tags belongToMany Products (through ProductTag)
  ProductTag.belongsToMany(models.Tag, {
    foreignKey: 'tag_id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  });
}

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
