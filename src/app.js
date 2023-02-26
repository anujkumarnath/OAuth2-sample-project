const express    = require('express');
const serverless = require('serverless-http');
const router     = require('./routes/index.js');

const app = express();
app.use('/.netlify/functions/app', router);

module.exports.handler = serverless(app);
