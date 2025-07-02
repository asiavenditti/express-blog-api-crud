const express = require('express')
const router = express.Router()
const posts = require('../data/posts')
const { error, log } = require('console')


/* index

router.get('/', (req, res) => {


    res.json(posts)
    console.log(req);

}) */


// CRUD INDEX 

router.get('/', (req, res) => {
    let filteredPost = posts

    if (req.query.tag) {
        filteredPost = posts.filter((post) => {

            return post.tags.includes(req.query.tag)
        })
    }

    res.json(filteredPost)
})



// show

router.get('/:id', (req, res) => {

    const id = parseInt(req.params.id)

    const post = posts.find((post) => {
        return post.id === id
    })


    if (!post) {
        res.status(404)
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    res.json(post)
    console.log(post)
})

// delete

router.delete('/:id', (req, res) => {

    const id = parseInt(req.params.id)
    const post = posts.find((post) => {
        return post.id === id
    })
    console.log(post)
    if (!post) {
        return res.status(404).json({
            message: `Post with ${id} not found`
        })
    }

    posts.splice(posts.indexOf(post), 1)

    console.log(posts);

    res.sendStatus(204)



})


// store 



router.post('/', (req, res) => {

    console.log(req.body, 'Body')

    const newId = posts[posts.length - 1].id + 1
    console.log(newId);



    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };


    posts.push(newPost)


    console.log(posts)


    res.status(201)
    res.json(newPost)
});



// update


module.exports = router;