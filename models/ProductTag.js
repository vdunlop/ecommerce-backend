const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // This column will store a reference of the 'id' of the 'Product' that is in this Category
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product", // 'product' model, we set in Product.js as its modelName property
        key: "id",
      },
    },
    // This column will store a reference of the 'id' of the 'Product' that is in this Category
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag", // 'tag' model, we set in Tag.js as its modelName property
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
