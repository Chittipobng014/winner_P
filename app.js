let axios = require('axios')
let jsonpAdapter = require('axios-jsonp');
let app = require('express')();

app.get('/', (req, res, next) => {
    res.send(200)
})