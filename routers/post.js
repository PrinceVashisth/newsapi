const router = require('express').Router();
const cloudinary = require('cloudinary').v2;
const PostSchema = require('../models/post');
const User = require('../models/Admins');
const bcrypt = require('bcryptjs');
cloudinary.config({ 
    cloud_name: 'dnkd8ncit', 
    api_key: '835945934675339', 
    api_secret: '5do_h8B7dXj-M3pqQPNu6VYaPnU',
    secure: true
  });

// create a post
router.post('/create',async(req,res)=>{ 

    try {
        const users = await User.findOne({Username:req.body.username});
        if(!users) res.send("user not found....");
          
          const check = bcrypt.compare( users.password,req.body.password);
             if(!check) res.send("Username or password Not Matching....");
      const file = req.files.img;
      const respo = await cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
            return result;
      })
        const user = await new PostSchema({
            img:respo.url,
            EngText:req.body.EngText,
            HindiText:req.body.HindiText,
            Source:req.body.Source,
            articleLink:req.body.articleLink,
            state:req.body.state    
        })
         await user.save();
        res.send("Data upload sucessfully ..........");
        
    } catch (error) {
       console.log(error);  
    }
});

// get all posts
router.get('/getPosts/:state',async(req,res)=>{

    const respo = await PostSchema.find({state:req.params.state});
    res.send(respo);  
});

module.exports = router;