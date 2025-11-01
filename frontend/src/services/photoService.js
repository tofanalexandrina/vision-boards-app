import apiClient from './baseApi.js';

export const photoService={
    //get images for a specific board -> GET
    //returns array of images for board
    getByBoard: (boardId)=>apiClient.get(`/boards/${boardId}/images`),
    //upload new image -> POST
    upload: (file, {imageName, imageDescription, boardId, userId='u1'})=>{
        //for sending file
        const formData=new FormData();
        formData.append('image', file);
        formData.append('imageName', imageName);
        formData.append('imageDescription', imageDescription);
        formData.append('boardId', boardId);
        formData.append('userId', userId);

        return apiClient.post('/images/upload', formData, {
            headers: {'Content-Type':'multipart/form-data'}
        });
    }
}

export default photoService;