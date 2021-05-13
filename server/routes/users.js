const {Router} = require('express');
const db = require('../database');
const bcrypt  = require('bcrypt');
const saltRounds = 10;


const router = Router();
router.use((req,res,next)=>{
    console.log('Request made to /USERS ROUTE');
    next();
});

router.get('/',async (req,res)=>{
    if(req.user){
        console.log(req.user);
        const results = await db.promise().query(`SELECT * FROM users`);
        res.status(200).send(results[0]);
    }else{
        res.status(403).send({msg: 'Not Authenticated'});
    }
    
    
});
router.post('/',async (req,res)=>{
    const {username, password, email} = req.body;
    if(username && password && email){
        
        console.log(username);
        console.log(password);
        console.log(email);
        try{
            const temp = await db.promise().query(`SELECT userID FROM users ORDER BY userID DESC LIMIT 1`);
            const hash = await bcrypt.hash(password,saltRounds);
            const newuserID = temp[0][0].userID+1;
            await db.promise().query(`INSERT INTO users values('${newuserID}','${username}','${hash}','${email}')`);
            res.status(201).send({msg: 'Created User'});
        }catch(err){
            console.log(err);
        }
        
    }
});
module.exports = router;