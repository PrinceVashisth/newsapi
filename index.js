require('dotenv').config();
const express = require('express');
const fileupload = require('express-fileupload');
const bodyParser = require('body-parser');
require('./db/database');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
const Auth  = require('./routers/auth');
const Post  = require('./routers/post');
const Scheme  = require('./routers/Schemes');
const path = require('path');

app.use(express.urlencoded({ extended: false })); 

app.use(fileupload({
    useTempFiles:true
}))

app.use('/api/auth',Auth);
app.use('/api/Posts',Post);
app.use('/api/Scheme',Scheme);
app.use(express.static("public"))

app.listen(port,()=>{
    console.log(`api running at port ${port}`);
});
