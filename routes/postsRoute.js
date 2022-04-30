const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET ALL POSTS
router.get('/', async (req, res) => {
    try {
        const post = await Post.find();
        res.json(post)
    }
    catch (err) {
        res.json({message: err});
    }
})

// GET SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }
    catch(err){
        res.json({message: err});
    }
})

//DELETE SPECIFIC POST
router.delete('/:postId', async (req, res) => {
    try {
        Post.remove({_id: req.params.postId});
    }
    catch (err) {
        res.json({message: err})
    }
})

//MODIFY SPECIFIC POST 
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title, description: req.body.description}})
        res.json(updatedPost)
    }
    catch (err) {
        res.json({message: err})
    }
})

// NEW POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedPost = await post.save();
        res.json(savedPost)
    }
    catch (err) {
        res.json({message: err});
    }
});

module.exports = router;