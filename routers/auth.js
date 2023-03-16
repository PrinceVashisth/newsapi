const router = require('express').Router();
const User = require('../models/Admins');
var bcrypt = require('bcryptjs');
router.post('/',async(req,res)=>{
   try {
    const Admin = await User.findOne({Username:req.body.username});
    if(Admin)
       res.send('user already Exist');
    
       const salt =  bcrypt.genSaltSync(10);
       const hashPassword =  bcrypt.hashSync(req.body.password, salt);   
       const user = await new User({
           Username:req.body.username,
           password:hashPassword
       });
       await user.save();
       res.send("User Registered...");
   } catch (error) {
    console.log(error);
   }
});

// api ka login route  
router.post('/login',async(req,res)=>{
 const user = await User.findOne({Username:req.body.username});
 if(!user) res.send("user not found....");
   
   const check = bcrypt.compare( user.password,req.body.password);
   if(!check) res.send("Username or password Not Matching....");
   res.send(user);
});

module.exports = router;