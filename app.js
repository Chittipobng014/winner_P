let app = require('express')();

app.listen(process.env.PORT || 8080);
console.log("App Listen to Port" + process.env.PORT || 8080);

app.get('/', (req, res, next) => {
    res.send(200)
})