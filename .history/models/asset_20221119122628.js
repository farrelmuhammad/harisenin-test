'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Category, {
        foreignKey: 'AssetId'
      })

      this.hasOne(models.Product_asset, {
        foreignKey: 'AssetId'
      })
    }
  }
  Asset.init({
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    size: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Asset',
  });
  return Asset;
};