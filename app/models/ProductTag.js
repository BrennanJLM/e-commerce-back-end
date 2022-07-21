
module.exports = (sequelize, DataTypes) => {
  let ProductTag = sequelize.define('product_tag', 
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
      product_id: { type: DataTypes.UUID, allowNull: false },
      tag_id: { type: DataTypes.UUID, allowNull: false }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'ProductTag'
    }
  );
  return ProductTag;
};