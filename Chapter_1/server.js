const express = require('express')
const app = express()
const PORT = 2323

// HTTP VERBS && Routes (or paths)

app.get('/', (req, res) => {
    console.log('This is the end point!')
    res.sendStatus(201);
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))
