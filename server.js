const http = require('http');
const app = require('./app');
const moment = require('moment');

var port = process.env.VCAP_APP_PORT || 8080;

const server = http.createServer(app);

var datetime = moment().format();
server.listen(port);

console.log("SERVER STARTED @:" + datetime + " on PORT: " + port);

require("cf-deployment-tracker-client").track();