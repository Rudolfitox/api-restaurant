import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from '../database/database';

export const Review = sequelize.define('resenia',{
        reseniaId:{
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        comments:{
            type:DataTypes.TEXT
        },
        rating:{
            type:DataTypes.DECIMAL
        },
        email:{
            type:DataTypes.TEXT
        } 
    },
    {
        timestamps:false
    }
)

