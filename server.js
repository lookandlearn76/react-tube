const express = require ('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
//create app
var app = express();


app.use(function (req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http') {
   next();
 } else {
    res.redirect('http://' + req.hostname + req.url);
  }     
});

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(PORT);
  console.log('express server is up and running on port ' + PORT);
