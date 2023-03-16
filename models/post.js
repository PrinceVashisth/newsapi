const mongoose  = require('mongoose');

const PostSchema = new mongoose.Schema({
    img:{
        type:String,
        require:true
    },
    EngText:{
        type:String,
        require:true
    },
    HindiText:{
        type:String,
        require:true
    },
    Source:{
        type:String,
        require:true
    },
    articleLink:{
        type:String
    },
    state:{
        type:String,
        require:true
    }
});

module.exports = new mongoose.model("Post",PostSchema);