'use strict';

const Connect = require('./connect');

class Client extends Connect {

    constructor(...config) {
        super(config);
    }
}

module.exports = Client;
