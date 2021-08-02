const express = require('express')
const router = express.Router()


router.post('/', (req,res) =>{

    match.setChoice(req.body.A)
    match.setAI()
    match.fight()
    res.render('result.ejs', {
        mychoice : match.options,
        AIchoice: match.ai,
        result : match.result
    })
})

module.exports = router