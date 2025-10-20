import Board from '../models/Board.js';
import {v4 as uuidv4} from 'uuid';

export const createBoard=async(req, res)=>{
    const {boardName, boardDescription}=req.body;
    const userId=req.body.userId || 'u1';
    try{
        const newBoard=new Board({
            boardId: uuidv4(),
            boardName,
            boardDescription,
            userId
        });
        const savedBoard=await newBoard.save();
        res.status(201).json(savedBoard);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}