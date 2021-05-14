const {Router} = require('express');
const passport = require('passport');
const router = Router();
const db = require('../database');
const bcrypt = require('bcrypt');
router.get('/login',async (req,res)=>{
    try{
    console.log("&&&&&&&&&&");
    
    if(req.session.user){
        console.log(req.session.user);
        res.send({loggedIn:true,user:req.session.user});
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
        //console.log(result[0][0].password);
        if(result[0].length===0){
            console.log("user not found");
            //done(null,false);
        }else{
            const hashpass = result[0][0].password;
            console.log(hashpass);
            const validpass = await bcrypt.compare(password,hashpass);
            if(validpass){
                req.session.user = result[0];
                console.log(req.session.user[0]);
                console.log("success");
                //console.log(res.body);
                // var out = '';
                // for (var p in res) {
                // out += p + ': ' + res[p] + '\n';
                // }
                // console.log(out);
                res.send({data:req.session.user[0],message: "OK" , statusType:"success"});
                //done(null,password);
            }else{
                console.log("failed!!")
                //done(null,false);
            }
        }
    }catch(err){
        console.log(err);
        //done(err,false);
    }
    res.send(200);
});
module.exports = router;