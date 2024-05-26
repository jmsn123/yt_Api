const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Get All Route
router.get("/", async(req, res) => {
    try {
        const users = await User.find();
        res.json({ users });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.json({ user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/add", async(req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json({ savedUser, messaeg: "new user added" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndUpdate(id, req.body);
        const newUser = await User.findById(id);

        res.json({ newUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.delete("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id, req.body);

        res.json({ deletedUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
module.exports = router;