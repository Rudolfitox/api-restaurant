import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from '../database/database';

export const Restaurant = sequelize.define('restaurantes',{
    restauranteid:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    description:{
        type:DataTypes.TEXT
    },
    logo:{
        type:DataTypes.TEXT
    },
    rating:{
        type:DataTypes.DECIMAL
    },
    name:{
        type:DataTypes.TEXT
    }
},
{
    timestamps:false
});
