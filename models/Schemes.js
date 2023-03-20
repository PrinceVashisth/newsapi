const mongoose = require('mongoose');

const Schemes = mongoose.Schema({
   state:{
    type:String,
    require:true
   },
   SchemeLink:{
    type:String,
    required:true,
    
   },
    district:{
        type:Array,
        default:[]
    },
    Crop:{
      type:Array,
      default:[]
    },
    Area:{
        type:Number,
        default:0
    }
   ,
   income:{
     type:Number,
     default:200000
   },
   CentralScheme:{
    type:Boolean,
    default:false
   }
});

module.exports =new mongoose.model('scheme',Schemes);