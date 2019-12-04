var express = require('express'),
    path = require('path'),
    app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 5000);