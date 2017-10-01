'use strict';

const baseConfig = require('./config');

/**
 * @external http://webservicepilot.tecdoc.net/pegasus-3-0/info/index.html
 */
class Connect {

    /**
     *
     * @param cnf
     */
    constructor (cnf) {
        this._setConfig(cnf);
    }

    /**
     * Assign configuration properties
     *
     * @param cnf
     */
    _setConfig (cnf) {

        Object.defineProperty(baseConfig, 'service_url', {
            value: baseConfig.service_url,
            writable: false
        });

        this._config = Object.assign(baseConfig, cnf);
    }
}

/**
 *
 * @type {Connect}
 */
module.exports = Connect;