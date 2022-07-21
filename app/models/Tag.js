
module.exports = (sequelize, DataTypes) => {
  let Tag = sequelize.define('tag', 
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
      tag_name: { type: DataTypes.STRING, allowNull: false }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'Tag'
    }
  );
  return Tag;
};