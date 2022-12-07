//import mongoose from "mongoose"
import express from "express"
import cors from "cors"
function finter(id, obj) {
    return ouput = obj.findById(obj.id === id)
}
const app = express()

// const corsOpt = {
//     origin: "https://",
//     optionSuccessStatus: "200"
// }

app.use(express.json())
app.use(cors())

app.get("/", (_req, res) => {
    res.send("Wellcome to Satesta")
})

app.get("api/user/:id", (req, res) => {
    const id = req.params.id
    console.log(id)
    res.status(200).json(id).end()
})

app.get("api/list/:id", (req, _res) => {
    const id = req.params.id
})

app.get("api/question/:id", (req, _res) => {
    const id = req.params.id
})

app.get("api/option/:id", (req, _res) => {
    const id = req.params.id

})
app.get("api/answer/:id", (req, _res) => {
    const id = req.params.id
})

app.use((_req, res) => {
    res.status(404)
})

app.listen(0, function () {
    console.log('app listen on port: ', this.address().port)
})