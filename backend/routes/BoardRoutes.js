import express from 'express';
import * as boardController from '../controllers/BoardController.js';
import {getImagesByBoard} from '../controllers/ImageController.js';

const router=express.Router();

router.get('/', boardController.getAllBoards);
router.post('/', boardController.createBoard);
router.get('/:boardId', boardController.getBoard);

router.get('/:boardId/images', getImagesByBoard);

export default router;