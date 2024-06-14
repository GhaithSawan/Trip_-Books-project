let router = require("express").Router()
const { validationCreateStrip, StripModel, validationPutStrip } = require("../models/StripSchema");

router.post("/CreateStrip", async (req, res) => {
    // التحقق من صحة البيانات المدخلة
    let { error } = validationCreateStrip(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    // تحديد تاريخ الإنشاء وتاريخ انتهاء الصلاحية
    let createdAt = new Date();
    let expiresAt = new Date(createdAt.getTime() + req.body.duration * 24 * 60 * 60 * 1000);

    // إنشاء مستند جديد في قاعدة البيانات
    let NewStrip = await StripModel.create({
        name: req.body.name,
        Destination: req.body.Destination,
        Rate: req.body.Rate,
        createdAt: createdAt,
        expiresAt: expiresAt
    });

    // إرجاع الحجز الجديد كاستجابة
    res.json(NewStrip);
});
router.get("/GetAllStrips", async (req, res) => {
    let Strips;
    let { Destination } = req.query
    console.log(Destination);
    try {
        if (Destination) {
            Strips = await StripModel.find({ Destination })
        } else {
            Strips = await StripModel.find()
        }
        return res.status(200).json(Strips);

    } catch (error) {
        return res.status(400).json(error.message);
    }
});


router.get("/GetStrip/:id", async (req, res) => {
    let Strip = await StripModel.findById(req.params.id)
    if (!Strip) {
        return res.status(400).json({ message: "Strip Not Found" })
    }
    res.json(Strip);
});
router.delete("/deleteStrip/:id", async (req, res) => {
    let Strip = await StripModel.findByIdAndDelete(req.params.id)
    if (!Strip) {
        return res.status(400).json({ message: "Strip Not Found" })
    }
    res.json({ message: "Strip Deleted" });
});

router.put("/UpdateStrip/:id", async (req, res) => {
    let { error } = validationPutStrip(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    let Strip = await StripModel.findById(req.params.id)
    let createdAt = new Date();
    Strip.expiresAt = new Date(createdAt.getTime() + req.body.duration * 24 * 60 * 60 * 1000);
    let UpdatedStrip = await StripModel.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            duration: req.body.duration,
            Destination: req.body.Destination,
            expiresAt: Strip.expiresAt,
            Rate: req.body.Rate,
            createdAt,
        }
    }, { new: true })
    res.json(UpdatedStrip);
});


module.exports = router