const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const path = require('path');
const app = express();
const router = require('./router');


app.use(morgan('combined'));
app.use(bodyParser.json());



router(app);

const port = process.env.PORT || 3090;

app.listen(port, function (err) {
    if(err){
        console.log('error ', err )
    }

    console.log("server on ", port);
});


