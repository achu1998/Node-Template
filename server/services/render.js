const dotenv = require('dotenv')
dotenv.config({path:'config.env'})
const axios = require('axios')

exports.homeRoutes = (req, res) => {
    // homePage
    res.render('signin')
}

exports.sign_up = (req, res) =>{
    res.render('signup')
}

exports.update_user = (req, res) =>{
    axios.get(process.env.RELEASE_ENV+'api/users', { params : { _id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data, siteUrl : process.env.RELEASE_ENV})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.chat = (req, res) =>{
    res.render('index')
}