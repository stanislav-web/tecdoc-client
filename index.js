'use strict';
if ( require.main === module && process.env.NODE_ENV !== 'dev') {
    throw Error( 'You can\'t run module as standalone. Please use require function');
}

const client = require('./lib/client');

module.exports =  client;