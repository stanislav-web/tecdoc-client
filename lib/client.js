'use strict';

const mixin = require('es6-class-mixin');
const request = require('request');
const config = require('./config');
const exception = require('./exception');
const trait = require('./mixins');

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
class Client extends mixin(
    trait.Meta,
    trait.Car
) {

    /**
     * Client class constructor
     *
     * @name lib\Client
     * @param {object} cfg configuration properties
     * @returns {void}
     */
    constructor (cfg) {
        super();
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
        return super.getPegasusVersionInfo();
    }

    /**
     * Get information about the current version of the service and the database used
     *
     * @name lib\Client
     * @example client.getPegasusDbVersionInfo()
     * @return {*|Promise.<*>}
     */
    getPegasusDbVersionInfo () {
        return super.getPegasusDbVersionInfo();
    }

    /**
     * Get TecDoc languages, for example German.
     *
     * @name lib\Client
     * @example client.getLanguages()
     * @return {*|Promise.<*>}
     */
    getLanguages () {
        return super.getLanguages();
    }

    /**
     * Get TecDoc countries, for example Germany.
     *
     * @name lib\Client
     * @example client.getCountries()
     * @return {*|Promise.<*>}
     */
    getCountries () {
        return super.getCountries();
    }

    /**
     * Get TecDoc regions, for example Europe.
     *
     * @name lib\Client
     * @example client.getCountryGroups()
     * @return {*|Promise.<*>}
     */
    getCountryGroups () {
        return super.getCountryGroups();
    }

    /**
     * Get car manufacturers
     *
     * @name lib\Client
     * @example client.getManufacturers()
     * @return {*|Promise.<*>}
     */
    getManufacturers () {
        return super.getManufacturers();
    }

    /**
     * Get car models
     *
     * @name lib\Client
     * @example client.getModelSeries()
     * @return {*|Promise.<*>}
     */
    getModelSeries () {
        return super.getModelSeries();
    }
}

/**
 *
 * @type {Client}
 */
module.exports = Client;