import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from '../database/database';

export const Categoria = sequelize.define('categoria',{
        slug:{
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        name:{
            type:DataTypes.TEXT
        }
    },
    {
        timestamps:false
    }
);