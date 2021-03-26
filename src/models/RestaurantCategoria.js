import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from '../database/database';

export const RestaurantCategoria = sequelize.define('restaurantcategoria', {}, { timestamps: false });
