import {Restaurant} from '../models/Restaurant';
import {Categoria} from '../models/Categoria';
import {Review} from '../models/Review';
import { RestaurantCategoria } from './RestaurantCategoria';

Restaurant.belongsToMany(Categoria,{through:RestaurantCategoria,foreignKey:'restauranteid'});
Categoria.belongsToMany(Restaurant,{through:RestaurantCategoria,foreignKey:'categoriaid'});

export {
    Restaurant,
    Categoria,
    Review,
    RestaurantCategoria
}
