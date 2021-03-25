import {Restaurant} from '../models/Restaurant';
import {Categoria} from '../models/Categoria';
import {Review} from '../models/Review';
import { Restaurant_Categoria } from './RestaurantCategoria';

Restaurant.belongsToMany(Categoria,{through:Restaurant_Categoria});
Categoria.belongsToMany(Restaurant,{through:Restaurant_Categoria});

export {
    Restaurant,
    Categoria,
    Review
}
