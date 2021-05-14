const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./database.js');
const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const eventRoute = require('./routes/event');
const passport = require('passport');
const store = new session.MemoryStore();
const cors  = require('cors');

const app = express();
// app.use(session({
//     secret: 'some secret',
//     cookie: {maxAge:30000},
//     saveUninitialized: false,
//     store
// }));
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
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
        console.log("error");
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
    console.log(store);
    console.log(`${req.method} - ${req.url}`);
    next();
});
app.use(passport.initialize());
app.use(passport.session());
app.use('/users',usersRoute);
app.use('/auth',authRoute);
app.use('/event',eventRoute);

require('dotenv').config()
app.listen(3001,() => {
    console.log("running server on 3001");
});

module.exports = app;