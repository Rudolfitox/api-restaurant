import { Categoria } from "../models/Categoria"
import { Restaurant } from "../models/Restaurant"
import { Review } from "../models/Review";

Restaurant.belongsToMany(Categoria,{through:"restaurant_category"});
Categoria.belongsToMany(Restaurant,{through:"restaurant_category"});
Review.belongsToMany(Restaurant,{through:"restaurant_review"});