
module.exports = (sequelize, DataTypes) => {
  let Category = sequelize.define('category', 
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
      category_name: { type: DataTypes.STRING, allowNull: false }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'Category'
    }
  );
  return Category;
};