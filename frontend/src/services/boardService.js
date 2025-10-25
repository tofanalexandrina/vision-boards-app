import apiClient from "./baseApi.js";

export const boardService={
    getAllBoards: ()=> apiClient.get('/boards'),
    getBoardById: (boardId)=>apiClient.get(`/boards/${boardId}`),
    createBoard: (boardData)=>apiClient.post('/boards', boardData),
    updateBoard: (boardId, boardData)=>apiClient.put(`/boards/${boardId}`, boardData),
    deleteBoard: (boardId)=>apiClient.delete(`/boards/${boardId}`)
};

export default boardService;