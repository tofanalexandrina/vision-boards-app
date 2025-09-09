import express from 'express';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated.js';

const router=express.Router();
router.get('/profile', ensureAuthenticated, (req, res)=>{
    res.json({user:req.user});
});

export default router;