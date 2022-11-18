const express= require("express");
const router = new express.Router();
const User= require("../model/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/add_user", async(req,res)=>{
    try{
        const adduser = new User(req.body)
        console.log(req.body)
        const added_movie= await(  adduser.save())
        res.send("user added successfully")   
    }

    catch(e){
        res.send(e);
    }
   
})

// authenticate: function(req, res, next) {
//     userModel.findOne({email:req.body.email}, function(err, userInfo){
//                 if (err) {
//                     next(err);
//                 } else {
//                     if(userInfo != null && bcrypt.compareSync(req.body.password, userInfo.password)) {
//                      const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' }); 
//                      res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});	
//                     }else{
//                         res.json({status:"error", message: "Invalid email/password!!!", data:null});
//                     }
//                 }
//             });
// },


// exports.login = async (req, res) => {
//     console.log(req.body)

//     if ((!req.body.name && !req.body.email) || (!req.body.password)) {
//         res.status(400).send({
//             message: 'Please provide name/email and password.'
//         });
//     }
//     user = null;
//     if(req.body.name) {
//         user = await findUserByName(req.body.name);
//     } else if (req.body.email) {
//         user = await findUserByEamil(req.body.email);
//     }
//     if(user == null || !(user instanceof User)) {
//         res.status(403).send({
//             message: "Invalid Credentials!"
//         });
//     } else {
//         if(user.verifyPassword(req.body.password)) {
//             res.status(200).send({
//                 message: "Login Successful",
//                 token: jwt.sign({ name: user.name, email: user.email }, secret)
//             })
//         } else {
//             res.status(403).send({
//                 message: "Invalid Credentails!"
//             });
//         }
//     }
// }


module.exports = router;

// router.get("/auth", async(req,res)=>{
//     try{
//         const auth = new User({email:req.body.email})
//         const authenticate =  await(User. findOne({email:req.body.email}))
//         if(authenticate!= null && bcrypt.compareSync(req.body.password, authenticate.password))
//         {

//         }
//     }

// })

async function findUserByEamil(email,req,res) {
    try {
        users = await User.findAll({ where: {email: email} })
        return (users instanceof Array) ? users[0] : null;
    }
    catch (e) {
        res.send(e);
    }
}

router.post("/login",async (req, res) => {
   //   const errors = validationResult(req);
  
    //   if (!errors.isEmpty()) {
    //     return res.status(400).json({
    //       errors: errors.array()
    //     });
    //   }
  
      const { email, password } = req.body;
      try {
        let user = await User.findOne({
          email
        });
        if (!user)
          return res.status(400).json({
            message: "User Not Exist"
          });
  
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({
            message: "Incorrect Password !"
          });
  
        const payload = {
          user: {
            id: user.id
          }
        };
  
        jwt.sign(
          payload,
          "randomString",
          {
            expiresIn: 3600
          },
          (err, token) => {
            if (err) throw err;
            res.send("login successfull")({
              token
            });
          }
        );
      } catch (e) {
        console.error(e);
        res.status(500).json({
          message: "Server Error"
        });
      }
    }
  );

