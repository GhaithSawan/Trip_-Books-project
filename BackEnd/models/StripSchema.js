let mongoose = require("mongoose");
let joi = require("joi");

let StripSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Destination: {
        type: String,
        required: true,
        set: v => v.trim()
    },
    Rate:{
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true
    }
});

let StripModel = mongoose.model("StripModel", StripSchema);

function validationCreateStrip(obj) {
    const schema = joi.object({
        name: joi.string().required(),
        Destination: joi.string().trim().required(),
        duration: joi.number().required(),  // مدة الصلاحية بالأيام
        Rate :  joi.number().required()
    });
    return schema.validate(obj);
}

function validationPutStrip(obj) {
    const schema = joi.object({
        name: joi.string(),
        Destination: joi.string().trim(),
        duration: joi.number() , // مدة الصلاحية بالأيام
        Rate :  joi.number()

    });
    return schema.validate(obj);
}

module.exports = {
    StripModel,
    validationCreateStrip,
    validationPutStrip
}
