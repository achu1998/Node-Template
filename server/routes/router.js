const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')


/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes)

/**
 *  @description sign up
 *  @method GET /sign-up
 */
route.get('/sign-up', services.sign_up)
route.get('/chat', services.chat)



// API
route.post('/api/signup', controller.create)
route.get('/api/signin', controller.signin)


module.exports = route