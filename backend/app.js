import express, { json } from 'express'
import cors from 'cors'
const app = express()

app.use(cors())

app.use(json())

app.listen(3000, function() {
    console.log("Server on!")
})