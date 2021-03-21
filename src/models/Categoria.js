import { Sequelize } from "sequelize";
import { sequelize } from '../database/database';



const Categoria = sequelize.define('categoria',{
        slug:{
            type:Sequelize.INTEGER,
            primaryKey:true
        },
        name:{
            type:Sequelize.TEXT
        }
    },
    {
        timestamps:false
    }
)

export default Categoria