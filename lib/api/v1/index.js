
const express = require("express")

const getHandler = require('./get')
const postHandler = require('./post')

const routes = express.Router({
    mergeParams: true
})

routes
    .route('*')
    .get(getHandler)
    .post(postHandler)

module.exports = routes