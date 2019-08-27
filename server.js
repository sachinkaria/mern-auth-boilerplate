const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const routes = require('./server/routes/index');

//  Connect all our routes to our application
app.use('/', routes);

// Turn on that server!
app.listen(port, () => console.log(`Listening on port ${port}`));
