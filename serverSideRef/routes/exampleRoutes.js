const express = require('express')
const router = express.Router() //called it router opposed to app within app.js

router.get('/exampleOfUsingRoutersInSeperateFiles', (req, res) => {
  res.send('Hello from routes/posts file')
})

router.get('/somethingelse', (req, res) => {
  res.send('"/somethingelse" url')
})

module.exports = router