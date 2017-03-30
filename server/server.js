var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlParser = bodyParser.urlencoded({extended: false});

app.use(bodyParser.json());

// to test; will update with the actual endpoint in next user story
app.get('/', function(req, res) {
  console.log('server.js received GET req at / . Readcastly is on its way to fame & fortune!');
  res.send('We heard your GET req and the diligent Readcastly hamsters are fast at work. All your wildest dreams will soon come true. Stay tuned for more exciting endpoints coming soon to a Postman near you.');
});

// to test urlParser; will update to add authentication route when we get to that story
app.post('/login', urlParser, function(req, res) {
  if(!req.body) {
    console.log('server.js . 17 - urlParser says no body on this request: ', req);
    return res.sendStatus(400);
  }
  res.send('Welcome to Readcastly, ', req.body.username, '! Nice to have you on board.');
})

// to test bodyParser for json;
app.post('/jsonTest', bodyParser, function(req, res) {
  if(!req.body) {
    console.log('server.js l. 26: jsonTest did not get an object to parse');
    return res.sendStatus(400);
  }
  console.log('server.js l. 29: req.body should be an obj. body = ', req.body);
  res.sendStatus(200);
})

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Readcastly server listening intently on port:", port);
})

module.exports = app;
