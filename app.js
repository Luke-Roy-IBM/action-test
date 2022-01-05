// Server to simulate Cloud Functions

const express = require('express')

const app = express()
const port = 8080
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(main(req.query)))
})

app.post('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(main(req.body)))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// main function like used with IBM Cloud Functions

function main(params) {
    return {
        name: (params.name ? params.name  : "John Doe" )
    }
}