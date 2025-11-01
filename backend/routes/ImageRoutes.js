//using multer for file uploads
import express from 'express';
import multer from 'multer';
import path from 'path';
import {fileURLToPath} from 'url';
import * as imageController from '../controllers/ImageController.js';

//for file path
const filename=fileURLToPath(import.meta.url);
const dirname=path.dirname(filename);

//where to store uploaded files
const uploadDir=path.join(dirname, '..', "uploads"); //backend->uploads

const storage=multer.diskStorage({
    //where to save file
    destination: (_req, _file, cb)=>{
        cb(null, uploadDir);
    },

    //what to name file
    filename: (_req, file, cb)=>{
        const safeName=file.originalname.replace(/\s+/g, '_');

        //added timestamp for uniqueness
        cb(null, `${Date.now()}_${safeName}`);
    }
});

//multer intance
const upload=multer({storage});

router.post('/upload', upload.single('image'), imageController.uploadImage);
router.get('/by-board/:boardId', imageController.getImagesByBoard);

export default router;
