import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from '../database/database';

export const RestaurantCategoria = sequelize.define('restaurantecategorias', {
    
    restaurantecategoria:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    restauranteid:{
        type:Sequelize.INTEGER,
    },
    categoriaid:{
        type:Sequelize.INTEGER,
    },

}, { timestamps: false });
