const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

//UPDATE
router.put("/:id",verify, async(req, res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }

        try{

            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            })
            res.status(200).json(updateUser)

        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("Not Access")
    }
    
})
//DELETE
//GET
//GET ALL
//GET USER STATS

module.exports = router