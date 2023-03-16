const mongoose = require('mongoose');

const DB = "mongodb+srv://prince:prince123@cluster0.wip1jpx.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB)
.then((result) => {
 console.log('connection sucessfull');   
}).catch((err) => {
    console.log(err);
});