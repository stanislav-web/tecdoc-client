'use strict';

const request = require('request');
const baseConfig = require('./config');

/**
 * @external http://webservicepilot.tecdoc.net/pegasus-3-0/info/index.html
 */
class Adapter {

    /**
     *
     * @param config
     */
    constructor (config) {
        this._setConfig(config);
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

        Object.defineProperty(baseConfig, 'method', {
            value: baseConfig.method,
            writable: false
        });

        this._config = Object.assign(baseConfig, cnf);
    }

    /**
     * Make request to remote server
     *
     * @param params
     * @returns {Promise}
     * @private
     */
    async _getRequest(params) {

        let config = this._config;

        return await new Promise((resolve, reject) => request.post({
                url: config.service_url,
                json: true,
                headers : config.content_type,
                body: params
            }, (errorMessage, response) => !errorMessage
                ? resolve(response.body) : reject(errorMessage)))
    }

    /**
     * Process response
     *
     * @param response
     * @returns {*}
     * @private
     */
    _processResponse(response) {

        if(response.hasOwnProperty('faultcode')) {
            throw new exception.RequestError(response.faultcode, response.faultstring)
        }
        return response;
    }
}

/**
 *
 * @type {Adapter}
 */
module.exports = Adapter;