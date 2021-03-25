import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from '../database/database';

export const Restaurant_Categoria = sequelize.define('Restaurant_Categoria', {}, { timestamps: false });
