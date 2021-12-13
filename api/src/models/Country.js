const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique:true,
      validate:{
        len:3
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      validate:{
        isUrl:true
      }
    },
    continent:{
      type: DataTypes.STRING,
      allowNull: false
    },
    region:{
      type:DataTypes.STRING
    },
    area:{
      type: DataTypes.FLOAT
    },
    population:{
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps:false
  }
  );
};
