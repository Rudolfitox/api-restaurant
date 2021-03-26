import {Restaurant} from '../models/Restaurant';
import {Categoria} from '../models/Categoria';
import {Review} from '../models/Review';
import { RestaurantCategoria } from './RestaurantCategoria';
import { RestaurantResenia } from './RestaurantResenia';


Restaurant.belongsToMany(Categoria,{through:RestaurantCategoria,foreignKey:'restauranteid'});
Categoria.belongsToMany(Restaurant,{through:RestaurantCategoria,foreignKey:'categoriaid'});

Restaurant.belongsToMany(Review,{through:RestaurantResenia,foreignKey:'restauranteid'});
Review.belongsToMany(Restaurant,{through:RestaurantResenia,foreignKey:'reseniaid'});

export {
    Restaurant,
    Categoria,
    Review,
    RestaurantCategoria,
    RestaurantResenia
}
