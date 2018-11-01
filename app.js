let app = require('express')();

app.get('/', (req, res, next) => {
    res.send(200)
})