const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{

    sequelize.define('activity',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type:DataTypes.STRING,
            AllowNull:false
        },
        difficulty:{
            type:DataTypes.INTEGER,
            validate:{
                len:[1,5]
            }
        },
        duration:{
            type: DataTypes.STRING
        },
        season:{
            type: DataTypes.STRING
        },
    },
    {
        timestamps:false
    }
    )
}

