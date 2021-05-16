const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./database.js');
const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const eventRoute = require('./routes/event');
const passport = require('passport');
const logger = require("./logger");
const store = new session.MemoryStore();
const cors  = require('cors');
require('dotenv').config()
const port = process.env.SERVER_PORT;
const app = express();
// app.use(session({
//     secret: 'some secret',
//     cookie: {maxAge:30000},
//     saveUninitialized: false,
//     store
// }));
app.use(express.json());

app.use(cors({
    
    origin: [process.env.CORS_URL],
    methods: ["GET","POST"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({
    extended:false
}));

db.connect(function (err) {
    if(err){
        console.log(err);
        process.exit(1);
    }else{
        console.log("connected to MySQL");
    
    }
});
app.use(session({
    key:"userID",
    secret:"password",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:60*60*24,
    },
}));
app.use((req,res,next)=>{
    //logger.info(req.body);
    console.log(store);
    console.log(`${req.method} - ${req.url}`);
    next();
});
app.use(passport.initialize());
app.use(passport.session());
app.use('/users',usersRoute);
app.use('/auth',authRoute);
app.use('/event',eventRoute);


app.listen(port,() => {
    console.log("running server on 3001");
    logger.log("info",`Server is running on port : ${port}`);
});

module.exports = app;