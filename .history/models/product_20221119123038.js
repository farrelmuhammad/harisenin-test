'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Product_asset)
    }
  }
  Product.init({
    product_name: DataTypes.STRING,
    product_slug: DataTypes.STRING,
    price: DataTypes.INTEGER,
    Product_assetId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};