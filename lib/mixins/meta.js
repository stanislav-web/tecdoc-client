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
     *
     * @param {object} client lib\Client
     */
    constructor (client) {
        this.client = client;
    }

    /**
     * Get information about the current version of the service
     *
     * @name lib\mixins\Meta
     * @returns {Promise.<*>}
     */
    getPegasusVersionInfo () {

        let params = {
            'getPegasusVersionInfo': {
                'provider': this.client._config.provider
            }
        };

        let response = this.client._getRequest(params);
        response = this.client._processResponse(response);
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
                'provider': this.client._config.provider
            }
        };

        let response = this.client._getRequest(params);
        response = this.client._processResponse(response);
        return response;
    }

    /**
     * Get TecDoc languages, for example German.
     *
     * @name lib\Client
     * @return {*|Promise.<*>}
     */
    getLanguages () {

        let params = {
            'getLanguages': {
                'lang': this.client._config.lang,
                'provider': this.client._config.provider
            }
        };

        let response = this.client._getRequest(params);
        response = this.client._processResponse(response);
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
                'lang': this.client._config.lang,
                'provider': this.client._config.provider
            }
        };

        let response = this.client._getRequest(params);
        response = this.client._processResponse(response);
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
                'lang': this.client._config.lang,
                'provider': this.client._config.provider
            }
        };

        let response = this.client._getRequest(params);
        response = this.client._processResponse(response);
        return response;
    }

    /**
     * In the results of the request functions references of key tables are returned (KT xxx).
     *
     * @param {object} params
     * @return {*}
     */
    getKeyValues (params) {

        let response = this.client._getRequest({
            'getKeyValues': params
        });
        response = this.client._processResponse(response);
        return response;
    }
}

/**
 *
 * @type {Meta}
 */
module.exports = Meta;