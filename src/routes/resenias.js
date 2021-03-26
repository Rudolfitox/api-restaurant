import {Router} from 'express';
const router = Router();

import { createResenia,getResenias,getOneResenia,deleteResenia,updateResenia } from '../controllers/resenia.controller';

router.post('/',createResenia);
router.get('/',getResenias);
router.get('/:id',getOneResenia);
router.delete('/:id',deleteResenia);
router.put('/:id',updateResenia);



export default router;