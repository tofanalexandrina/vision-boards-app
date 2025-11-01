import Board from "../models/Board.js";
import { v4 as uuidv4 } from "uuid";

export const getAllBoards = async (req, res) => {
  try {
    const userId = req.query.userId || "u1"; //later from auth
    const boards = await Board.find({ userId });
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBoard = async (req, res) => {
  try {
    const board = await Board.findOne({ boardId: req.params.boardId });
    if (!board) {
      return res.status(404).json({ message: "Board not found" });
    }
    return res.status(200).json(board);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBoard = async (req, res) => {
  const { boardName, boardDescription } = req.body;
  const userId = req.body.userId || "u1";
  try {
    const newBoard = new Board({
      boardId: uuidv4(),
      boardName,
      boardDescription,
      userId,
    });
    const savedBoard = await newBoard.save();
    res.status(201).json(savedBoard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
