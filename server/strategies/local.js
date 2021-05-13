const LocalStrategy = require('passport-local');
const passport = require('passport');
const db = require('../database');
const bcrypt = require('bcrypt');

passport.serializeUser((user,done)=>{
    done(null,user.username);
});
passport.deserializeUser(async (username, done)=>{
    try{
        const result = await db.promise().query(`SELECT * FROM users WHERE username = '${username}'`);
        if(result[0][0]){
            done(null,result[0][0]);
        }
        }catch(err){
            done(err,null);
    }
});
passport.use(new LocalStrategy(
    async (username,password,done)=>{
        console.log(password);
        console.log("*****");
        try{
            const result = await db.promise().query(`SELECT * FROM users WHERE username = '${username}'`);
            console.log(result[0][0].password);
            if(result[0].length===0){
                done(null,false);
            }else{
                const hashpass = result[0][0].password;
                console.log(hashpass);
                const validpass = await bcrypt.compare(password,hashpass);
                if(validpass){
                    console.log("success");
                    done(null,password);
                    
                }else{
                    console.log("failed!!")
                    done(null,false);
                }
            }
        }catch(err){
            console.log(err);
            done(err,false);
        }
    }
));