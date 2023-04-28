const mongoose = require('mongoose');

const DB = process.env.DATABASE;
mongoose.connect(DB)
.then((result) => {
 console.log('connection sucessfull');   
}).catch((err) => {
    console.log(err);
});