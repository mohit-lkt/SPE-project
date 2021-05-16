const {Router} = require('express');
const passport = require('passport');
const router = Router();
const db = require('../database');
const bcrypt = require('bcrypt');
const logger = require("../logger")
router.get('/login',async (req,res)=>{
    try{
    
    if(req.session.user){
        console.log(req.session.user);
        res.send({loggedIn:true,user:req.session.user});
        logger.log("info","user logged in");
    }else{
        res.send({loggedIn:false,user:{}});
    }
}catch(err){
    console.log(err);
}
});

router.post('/login',async (req,res)=>{
    const username  = req.body.username;
    const password = req.body.password;
    console.log(password);
    console.log("*****");
    try{
        const result = await db.promise().query(`SELECT * FROM users WHERE username = '${username}'`);
        if(result[0].length===0){
            console.log("user not found");
            logger.log("info","invalid username / password")
        }else{
            const hashpass = result[0][0].password;
            console.log(hashpass);
            const validpass = await bcrypt.compare(password,hashpass);
            if(validpass){
                req.session.user = result[0];
                console.log(req.session.user[0]);
                console.log("success");
                logger.log("info","login successful");
                res.send({data:req.session.user[0],message: "OK" , statusType:"success"});
                
            }else{
                console.log("failed!!")
                logger.log("info","invalid username / password")
            }
        }
    }catch(err){
        console.log(err);
        logger.log("error",err);
    }
    res.sendStatus(200);

});
module.exports = router;