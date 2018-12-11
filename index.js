const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const path = require('path');
const app = express();
const router = require('./router');
const cors = require('cors');



app.use(morgan('combined'));
app.use(bodyParser.json());



const corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));



router(app);

const port = process.env.PORT || 3090;

app.listen(port, function (err) {
    if(err){
        console.log('error ', err )
    }

    console.log("server on ", port);
});


