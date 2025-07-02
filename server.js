const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const postsRouter = require('./routes/posts')

app.use(express.json());


app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);

})

app.get('/', (req, res) => {


    res.send('WELCOME TO MY BLOG!')

})

app.use('/posts', postsRouter);



