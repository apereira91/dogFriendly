if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  const axios = require('axios')
  const express = require('express')
  const app = express()
  
  app.use(express.json())
  app.use(express.static('public'))
  
  app.post('/dogAPI', (req, res) => {
    axios({
      url: url,
      responseType: 'json'
    }).then(data => res.json(data.data.currently))
  })
  
  app.listen(3000, () => {
    console.log('Server Started')
  })