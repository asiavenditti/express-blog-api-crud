const express = require('express')
const router = express.Router()
const posts = require('../data/posts')
const { error } = require('console')


// index

router.get('/', (req, res) => {

    res.json(posts)
    console.log(req);

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
    posts.splice(posts.indexOf(post), 1)


    if (!post) {

        res.status(404)

        return res.status(404).json(

            {
                message: `Post with ${id} not found`
            }

        )
    }


    res.sendStatus(204)

    console.log(posts);


})


module.exports = router;