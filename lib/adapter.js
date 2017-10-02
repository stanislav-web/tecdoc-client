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
    _makeRequest(params) {

        let config = this._config;

        return new Promise((resolve) => {
            return request.post({
                url: config.service_url,
                json: true,
                headers : config.content_type,
                body: params
            }, (err, httpResponse, body) => {
                resolve(body);
            });
        });
    }
}

/**
 *
 * @type {Adapter}
 */
module.exports = Adapter;