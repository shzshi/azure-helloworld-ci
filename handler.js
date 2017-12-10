'use strict';

const HelloWorld = require('./lib/hello-world');

module.exports.helloWorld = (event, context, callback) => {

  var hlloWorld = new HelloWorld();

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(hlloWorld.sayHello(event)),
  };

  callback(null, response);
};