import {Router} from 'express';
import { createRestaurant } from '../controllers/project.controller';
const router = Router();

router.post('/',createRestaurant);


export default router;