// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize ProductTag model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

// set up fields and rules for ProductTag model
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
