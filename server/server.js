var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var port = 3737;

// TODO server front end files with static
app.use(express.static('public'));

app.use(bodyParser.json());
// TODO Initialize Session
app.use(session({
  secret: 'this is the secret',
  saveUninitialized: false,
  resave: false
}));
app.post("/api/screenname", function(req, res, next){
  // TODO Save screenname to session
  // if (req.session.screename){
  //   next();
  // } else {
  req.session.screenname = req.body.screenname;
  res.status(200).json(req.session.screenname);
  // }
});

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", addScreenname, chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);

function addScreenname(req, res, next) {
 	console.log('adding screen name', session);
 	req.body.screenname = session.screenname;
 	next();
 }

app.listen(port, function(){
  console.log("Listening on port ", port, " INSERT-WITTY-STATEMENT-HERE");
});
