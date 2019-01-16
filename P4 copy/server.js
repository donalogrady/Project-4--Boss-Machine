
const express = require('express');
const bodyParser = require('body-parser'); //imports body parser
const cors = require('cors');//imports cors code
const app = express();


module.exports = app;

/* Do not change the following line! It is required for testing and allowing
the frontend application to interact as planned with the api server*/
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
//CORS COD
///*
app.use(cors());

app.get('/hello/:id', function (req, res, next) {
  res.json({msg: 'Hello world, we are CORS-enabled!'});
});

app.listen(80, function () {
  console.log('CORS-enabled web server is listening on port 80');
});

// Add middware for parsing request bodies here:
//BODY PARSER CODE
app.use( ()=> {
  bodyParser.json();
});

// Mount your existing apiRouter below at the '/api' path.
//ROUTER REFERENCE CODE
const apiRouter = require('./server/api');
app.use('server/api', apiRouter);

// This conditional is here for testing purposes:
if (!module.parent) {

  // Add your code to start the server listening at PORT below:
  //PORT CODE

 app.listen(PORT, () => {
 console.log(`Listening on port ${PORT}`);
});


}
