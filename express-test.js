var express = require('express');
var app = express();

app.get('/', function(req, res) {
    //resp.send('index.html');
    //resp.redirect('index.html');
    res.sendFile('index.html', {root: '.'});

});

app.get('/index.html', function(req, res) {
    //resp.send('index.html');
    //resp.redirect('index.html');
    res.send('something');
});

app.listen(8081, function()
{

});
