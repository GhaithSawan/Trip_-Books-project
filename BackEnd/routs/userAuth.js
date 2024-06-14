const { validationregisterStrip, UserModel } = require("../models/UserModel");

let router = require("express").Router()

router.post("/register", async (req, res) => {
    let { error } = validationregisterStrip(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    let user = await UserModel.findOne({ email: req.body.email })
    if (user) {
        return res.status(400).json({ message: "user alread exsist" })
    }
  
     let newUser = await UserModel.create({
        email: req.body.email,
        password: req.body.password,
    });

     res.status(200).json(newUser)
})
module.exports = router