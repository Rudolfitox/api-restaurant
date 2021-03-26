import {Restaurant} from '../models/Restaurant';
import {Categoria} from '../models/Categoria';
import {Review} from '../models/Review';
import { RestaurantCategoria } from './RestaurantCategoria';

Restaurant.belongsToMany(Categoria,{through:RestaurantCategoria});
Categoria.belongsToMany(Restaurant,{through:RestaurantCategoria});

export {
    Restaurant,
    Categoria,
    Review,
    RestaurantCategoria
}
