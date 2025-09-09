import express from 'express';
import passport from 'passport';
const router=express.Router();


router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/login'}),
(req, res)=>{
    //successful authentification redirects to frontend
    res.redirect('http://localhost:5173');
});

router.get('/status', (req, res)=>{
    if(req.isAuthenticated()){
        res.json({
            authenticated: true,
            user: req.user
        });
    }else{
        res.json({authenticated: false});
    }
});

router.get('/logout', (req, res, next)=>{
    req.logout(function(err){
        if(err){return next(err);}
        res.redirect('http://localhost:5173');
    });
});

export default router;