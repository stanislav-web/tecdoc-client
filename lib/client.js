'use strict';
const Adapter = require('./adapter');
const exception = require('./exception');

class Client extends Adapter {

    /**
     * Setup config via constructor
     *
     * @param config
     */
    constructor (config) {
        super(config);
    }

    /**
     * Get information about the current version of the service
     *
     * @returns {Promise.<*>}
     */
    async getPegasusVersionInfo () {

        let params = {
            'getPegasusVersionInfo': {
                'arg0': {
                    'providser': this._config.provider
                }
            }
        };

        let response = await this._getRequest(params);
        response = this._processResponse(response);
        return response;
    }

    /**
     * Get information about the current version of the service and the database used
     *
     * @returns {Promise.<*>}
     */
    async getPegasusDbVersionInfo () {

        let params = {
            'getPegasusVersionInfo2': {
                'arg0': {
                    'provider': this._config.provider
                }
            }
        };

        let response = await this._getRequest(params);
        response = this._processResponse(response);
        return response;
    }
}

/**
 *
 * @type {Client}
 */
module.exports = Client;