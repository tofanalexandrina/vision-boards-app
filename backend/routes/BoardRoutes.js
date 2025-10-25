import express from 'express';
import * as boardController from '../controllers/BoardController.js';

const router=express.Router();

router.get('/', boardController.getAllBoards);
router.post('/', boardController.createBoard);
router.get('/:boardId', boardController.getBoard);

export default router;