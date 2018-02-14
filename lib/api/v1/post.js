const express = require("express")
const { getPosts, savePost, checkPost } = require("./helpers")

const routes = express.Router({
    mergeParams: true
})

routes.post('/post', (req,res) => {
    const content = String(req.body.content)

    if (!content || !checkPost(content)) {
        res.json({
            status: false,
            reason: "invalid content"
        })
        return;
    }

    const post = {
        date: new Date().toJSON(),
        content: content
    }

    const id = savePost(post)

    res.json({
        status: true,
        id: id
    })
})

module.exports = routes