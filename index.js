'use strict';

if ( require.main === module ) {
    throw Error( 'You can\'t run module as standalone. Please use require function');
}

const client = require('./lib/client');

module.exports =  client;