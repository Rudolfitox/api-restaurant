import { Sequelize } from "sequelize";
import { sequelize } from '../database/database';
import Categoria from './Categoria';


const Restaurant = sequelize.define('restaurant',{
    slug:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    description:{
        type:Sequelize.TEXT
    },
    logo:{
        type:Sequelize.TEXT
    },
    rating:{
        type:Sequelize.DECIMAL
    },
    food_type:{
        type:Sequelize.INTEGER
    },
    name:{
        type:Sequelize.TEXT
    }
},
{
    timestamps:false
});

Restaurant.hasMany(Categoria,{
    foreingKey:'food_type'
})


export default Restaurant;