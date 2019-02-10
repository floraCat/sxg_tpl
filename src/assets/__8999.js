var fs= require("fs");
var path = require('path');
var express = require('express');
var app = express();

app.set('port',8999);

app.use(express.static(path.join(__dirname,'./')));
app.listen(app.get('port'));