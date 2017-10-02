/**
 * class Meta
 *
 * @returns getPegasusVersionInfo
 * @returns getPegasusDbVersionInfo
 * @returns getLanguages
 * @returns getCountries
 * @returns getCountryGroups
 */
class Meta {

    /**
     * Get information about the current version of the service
     *
     * @name lib\mixins\Meta
     * @returns {Promise.<*>}
     */
    getPegasusVersionInfo () {

        let params = {
            'getPegasusVersionInfo': {
                'provider': this._config.provider
            }
        };

        let response = this._getRequest(params);
        response = this._processResponse(response);
        return response;
    }

    /**
     * Get information about the current version of the service and the database used
     *
     * @name lib\mixins\Meta
     * @returns {Promise.<*>}
     */
    getPegasusDbVersionInfo () {

        let params = {
            'getPegasusVersionInfo2': {
                'provider': this._config.provider
            }
        };

        let response = this._getRequest(params);
        response = this._processResponse(response);
        return response;
    }

    /**
     * Get TecDoc languages, for example German.
     *
     * @name lib\Client
     * @example client.getLanguages()
     * @return {*|Promise.<*>}
     */
    getLanguages () {

        let params = {
            'getLanguages': {
                'lang': this._config.lang,
                'provider': this._config.provider
            }
        };

        let response = this._getRequest(params);
        response = this._processResponse(response);
        return response;
    }

    /**
     * Get TecDoc countries, for example Germany.
     *
     * @name lib\Client
     * @return {*|Promise.<*>}
     */
    getCountries () {

        let params = {
            'getCountries': {
                'lang': this._config.lang,
                'provider': this._config.provider
            }
        };

        let response = this._getRequest(params);
        response = this._processResponse(response);
        return response;
    }

    /**
     * Get TecDoc regions, for example Europe.
     *
     * @name lib\Client
     * @return {*|Promise.<*>}
     */
    getCountryGroups () {

        let params = {
            'getCountryGroups': {
                'lang': this._config.lang,
                'provider': this._config.provider
            }
        };

        let response = this._getRequest(params);
        response = this._processResponse(response);
        return response;
    }
}

/**
 *
 * @type {Meta}
 */
module.exports = Meta;