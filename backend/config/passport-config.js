import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import findOrCreate from 'mongoose-findorcreate';
import passport from 'passport';
import mongoose from 'mongoose';

const UserModel=mongoose.model('User');
UserModel.schema.plugin(findOrCreate);


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done){
        //find or create user in database
        UserModel.findOrCreate({googleId: profile.id}, {
            userId: profile.id,
            email: profile.emails[0].value,
            userName: profile.displayName,
            password: 'google-oauth',
            userProfilePicture: profile.photos?.[0]?.value||''
        },
        function(err, user){
            return done(err, user);
        });
    }

));

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
    UserModel.findById(id).then(user=>{
        done(null, user);
    })
    .catch(err=>{
        done(err, null);
    });
});

export default passport;