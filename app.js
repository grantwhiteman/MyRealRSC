const express = require ("express")
const app = express()
const port = 3000


//const Match = require("./match.js")

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
const Match = require("./src/match")
const match = new Match()

global.match = match

const indexRouter = require("./routes/index.js")
const matchRouter = require("./routes/match.js")
const resultRouter = require("./routes/result.js")


app.use('/', indexRouter)
app.use('/match', matchRouter)
app.use('/result', resultRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })