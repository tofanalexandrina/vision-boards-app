import express from 'express';
import * as boardController from '../controllers/BoardController.js';

const router=express.Router();

router.post('/', boardController.createBoard);

export default router;