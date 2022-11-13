var User = require('../model/user')
const fs = require('fs');

// create new user
exports.create = async(req,res)=>{
    
    // validate request
    
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"})
        return
    }

    // new user

    try {
        const {name, email, password} = req.body;
        const user = await User.create({name, email, password, picture});
        res.status(201).json(user);
    } catch (e) {
        let msg;
        if(e.code == 11000){
            msg = "User already exists"
        } else {
            msg = e.message;
        }
        res.status(400).json(msg)
    }

}

// find user for signin
exports.signin = async(req, res)=>{

    // validate request
    
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"})
        return
    }

    // find user

    try {
        const {email, password} = req.body;
        const user = await User.findByCredentials(email, password);
        user.status = 'online';
        await user.save();
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json(e.message)
    }
    
}
