const express = require('express')
const dotenv = require('dotenv')

dotenv.config();

const port = process.env.PORT || 5000

const app = express();

app.get('/', (req, res)=>{
    res.json({
        "slackUsername": 'LeoNesi',
        "backend": true,
        "age": 21,
        "bio": 'I am a full-stack Developer hoping to expand skills and impact on the society'
    })
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})