const express = require('express')
const app = express()

app.listen(process.env.PORT || 8080);
console.log("App Listen to Port" + process.env.PORT || 8080);

setTimeout(function () {
    console.log("...")
}, 5000);

app.get('/',function (req, res, next) {
    res.send(200)
})