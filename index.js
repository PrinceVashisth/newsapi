const express = require('express');
const fileupload = require('express-fileupload');
require('./db/database');
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
const Auth  = require('./routers/auth');
const Post  = require('./routers/post');

app.use(express.urlencoded({ extended: false })); 

app.use(fileupload({
    useTempFiles:true
}))

app.use('/api/auth',Auth);
app.use('/api/Posts',Post);
app.use(express.static("public"))



app.listen(port,()=>{
    console.log(`api running at port ${port}`);
});
