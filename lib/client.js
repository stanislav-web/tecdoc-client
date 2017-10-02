'use strict';
const Adapter = require('./adapter');

class Client extends Adapter {

    /**
     * Setup config via constructor
     *
     * @param config
     */
    constructor(config) {
        super(config);
    }

    /**
     * Get information about the current version of the service
     *
     * @returns {Promise}
     */
    getPegasusVersionInfo () {

        let params = {
            'getPegasusVersionInfo': {
                'arg0': {
                    'provider':  this._config.provider
                }
            }
        };

        return this._makeRequest(params);
    }

    /**
     * Get information about the current version of the service and the database used
     *
     * @returns {Promise}
     */
    getPegasusDbVersionInfo () {

        let params = {
            'getPegasusVersionInfo2': {
                'arg0': {
                    'provider':  this._config.provider
                }
            }
        };

        return this._makeRequest(params);
    }

    /**
     * Get TecDoc languages, for example German.
     *
     * @returns {Promise}
     */
    getLanguages () {

        let params = {
            'getLanguages': {
                'arg0': {
                    'provider':  this._config.provider
                }
            }
        };

        return this._makeRequest(params);
    }

}

/**
 *
 * @type {Client}
 */
module.exports = Client;