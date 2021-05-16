const {Router} = require('express');
const db = require('../database');
const logger = require("../logger")

const router = Router();
router.use((req,res,next)=>{
    console.log('Request made to /event ROUTE');
    next();
});

router.get('/',async (req,res)=>{
    if(req.session.user){
        console.log(req.session.user);
        const results = await db.promise().query(`SELECT * FROM event`);
        res.status(200).send(results[0]);
    }else{
        res.status(403).send({msg: 'Not Authenticated'});
    }
    
    
});
router.post('/',async (req,res)=>{
    const { summary, location, description, startDate, startTime, endDate, endTime} = req.body;
    if(summary && location && startDate && startTime && endDate && endTime){
        
        console.log(summary);
        console.log(location);
        console.log(description);
        try{
            const temp = await db.promise().query(`SELECT userID FROM event ORDER BY userID DESC LIMIT 1`);
            const newuserID = temp[0][0].userID+1;
            await db.promise().query(`INSERT INTO event values('${newuserID}','${summary}','${location}','${description}','${startDate}','${startTime}','${endDate}','${endTime}')`);
            res.status(200).send({msg: 'Created Event'});
            logger.log("info","Created Event Successfully! Go Get healthy now");
            console.log("Success");
        }catch(err){
            logger.log("info","Error creating event");
            console.log(err);

        }
        
    }
});
module.exports = router;