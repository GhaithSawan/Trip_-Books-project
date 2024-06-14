let mongoose = require("mongoose");
let joi = require("joi");

let UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
  
});

let UserModel = mongoose.model("UserModel", UserSchema);

function validationregisterStrip(obj) {
    const schema = joi.object({
        email: joi.string().required(),
        password: joi.string().trim().required(),
    });
    return schema.validate(obj);
}


module.exports = {
    UserModel,
    validationregisterStrip,
}
