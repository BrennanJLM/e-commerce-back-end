const Category = require("./Category");

module.exports = (sequelize, DataTypes) => {
  let Product = sequelize.define('product', 
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
      product_name: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.STRING, allowNull: false },
      stock: { type: DataTypes.BOOLEAN, allowNull: false },
      category_id: { type: DataTypes.UUID, allowNull: false }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'Product'
    }
  );
  return Product;
};