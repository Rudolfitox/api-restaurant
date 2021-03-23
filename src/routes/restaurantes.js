import {Router} from 'express';
import { createRestaurant, deleteRestaurant, getOneRestaurant, getRestaurants, updateRestaurant } from '../controllers/project.controller';
const router = Router();

router.post('/',createRestaurant);
router.get('/',getRestaurants);
router.get('/:id',getOneRestaurant);
router.delete('/:id',deleteRestaurant);
router.put('/:id',updateRestaurant);




export default router;