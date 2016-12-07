var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var app = express();
var PORT = process.env.PORT || 3000;




app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Path hit, working');
});


app.listen(PORT, function () {
    console.log('Express listening on PORT ' + PORT + ' !');
})
