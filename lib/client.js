'use strict';

const Connect = require('./connect');


class Client extends Connect {

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);
    }

    /**
     *
     * @returns {*}
     */
    getConfig() {
        return this._config;
    }
}

/**
 *
 * @type {Client}
 */
module.exports = Client;
