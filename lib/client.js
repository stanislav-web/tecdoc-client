'use strict';

const request = require('request');
const config = require('./config');
const exception = require('./exception');
const input = require('./input');
const mixin = require('./mixins');

/**
 * class Client
 *
 * @returns getPegasusVersionInfo
 * @returns getPegasusDbVersionInfo
 * @returns getLanguages
 * @returns getCountries
 * @returns getCountryGroups
 * @returns getManufacturers
 * @returns getModelSeries
 */
class Client {

    /**
     * Client class constructor
     *
     * @name lib\Client
     * @param {object} cfg configuration properties
     * @returns {void}
     */
    constructor (cfg) {
        this._config = null;
        this._setConfig(cfg);
    }

    /**
     * Config object setter
     *
     * @name lib\Client
     * @param {object} cfg configuration properties
     * @returns {void}
     * @private
     */
    _setConfig (cfg) {

        Object.defineProperty(config, 'service_url', {
            value: config.service_url,
            writable: false
        });

        Object.defineProperty(config, 'method', {
            value: config.method,
            writable: false
        });

        this._config = Object.assign(config, cfg);
    }

    /**
     * Get request to remote server
     *
     * @name lib\Client
     * @param {array} params
     * @returns {Promise.<*>}
     * @private
     */
    _getRequest(params) {

        let config = this._config;

        return new Promise((resolve, reject) => request.post({
            url: config.service_url,
            json: true,
            body: params
        }, (errorMessage, response, data) => (!errorMessage && response.statusCode === 200)
            ? resolve(data) : reject(errorMessage)
        ));
    }

    /**
     * Process response from server
     *
     * @name lib\Client
     * @param response
     * @returns {object} json
     * @private
     */
    _processResponse(response) {

        if(response.hasOwnProperty('faultcode')) {
            throw new exception.RequestError(response.faultcode, response.faultstring);
        }
        return response;
    }

    /**
     * Get information about the current version of the service
     *
     * @name lib\Client
     * @example client.getPegasusVersionInfo()
     * @return {*|Promise.<*>}
     */
    getPegasusVersionInfo () {

        let metaMixin = new mixin.Meta(this);
        return metaMixin.getPegasusVersionInfo();
    }

    /**
     * Get information about the current version of the service and the database used
     *
     * @name lib\Client
     * @example client.getPegasusDbVersionInfo()
     * @return {*|Promise.<*>}
     */
    getPegasusDbVersionInfo () {

        let metaMixin = new mixin.Meta(this);
        return metaMixin.getPegasusDbVersionInfo();
    }

    /**
     * Get TecDoc languages, for example German.
     *
     * @name lib\Client
     * @example client.getLanguages()
     * @return {*|Promise.<*>}
     */
    getLanguages () {

        let metaMixin = new mixin.Meta(this);
        return metaMixin.getLanguages();
    }

    /**
     * Get TecDoc countries, for example Germany.
     *
     * @name lib\Client
     * @example client.getCountries()
     * @return {*|Promise.<*>}
     */
    getCountries () {

        let metaMixin = new mixin.Meta(this);
        return metaMixin.getCountries();
    }

    /**
     * Get TecDoc regions, for example Europe.
     *
     * @name lib\Client
     * @example client.getCountryGroups()
     * @return {*|Promise.<*>}
     */
    getCountryGroups () {

        let metaMixin = new mixin.Meta(this);
        return metaMixin.getCountryGroups();
    }

    /**
     * Get car manufacturers
     *
     * @param {object} params input params
     * @name lib\Client
     * @example client.getManufacturers()
     * @return {*|Promise.<*>}
     */
    getManufacturers (params) {

        params = Object.assign({}, params);
        params = Object.assign({}, this._config, params);

        try {
            let data = input.filter({
                country : 'string,null',
                favouredList: 'number,null',
                lang : 'string',
                linkingTargetType: 'string',
                provider: 'number'
            }, params);
            let carMixin = new mixin.Car(this);
            return carMixin.getManufacturers(data);
        } catch (err) {
            throw new exception.ClientError(err.status, err.message);
        }
    }

    /**
     * Get car models
     *
     * @param {object} params input params
     * @name lib\Client
     * @example client.getModelSeries()
     * @return {*|Promise.<*>}
     */
    getModelSeries (params) {

        params = Object.assign({}, params);
        params = Object.assign({}, this._config, params);

        try {
            let data = input.filter({
                country : 'string,null',
                favouredList: 'number,null',
                lang : 'string',
                linkingTargetType: 'string',
                provider: 'number',
                manuId : 'number,null'
            }, params);
            let carMixin = new mixin.Car(this);
            return carMixin.getModelSeries(data);
        } catch (err) {
            throw new exception.ClientError(err.status, err.message);
        }
    }
}

/**
 *
 * @type {Client}
 */
module.exports = Client;