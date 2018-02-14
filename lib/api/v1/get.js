const express = require("express")
const { getPosts } = require("./helpers")

const routes = express.Router({
    mergeParams: true
})

routes.get('/post/random', (req,res) => {
    const posts = getPosts();
    const post = posts[Math.floor(Math.random()*posts.length)];
    res.json({
        status: true,
        post: post
    })
})

routes.get('/post/id/:id', (req,res) => {
    const id = req.params.id;
    const posts = getPosts();
    const post = posts.find(postSearch => postSearch.id == id);
    if (!post) {
        res.status(404).json({
            error: "Post not found"
        })
    }
    res.json(post)
})

module.exports = routes