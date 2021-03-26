import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from '../database/database';

export const RestaurantResenia = sequelize.define('restauranteresenias', {
    
    restauranteresenia:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    restauranteid:{
        type:Sequelize.INTEGER,
    },
    reseniaid:{
        type:Sequelize.INTEGER,
    },

}, { timestamps: false });
