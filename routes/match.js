const express = require('express')
const router = express.Router()


router.post('/', (req, res) => {

  match.setName(req.body.inputplayer1);
  
  res.render('match.ejs', {
    name: match.name

  })
})



module.exports = router;