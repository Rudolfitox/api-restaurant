import {Router} from 'express';
const router = Router();

import { createCategory,deleteCategory,getCategories,updateCategory,getOneCategory } from '../controllers/category.controller';

router.post('/',createCategory);
router.get('/',getCategories);
router.delete('/:id',deleteCategory);
router.put('/:id',updateCategory);
router.get('/:id',getOneCategory)




export default router;