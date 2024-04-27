const express=require("express");
const router=new express.Router();
const User=require("../model/user");
// insert a new user
router.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

//  get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// delete a user by ID
router.delete('/users/:userId', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId);
        if (!deletedUser) {
            return res.status(404).send('User not found');
        }
        res.status(200).send(deletedUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
 module.exports=router;