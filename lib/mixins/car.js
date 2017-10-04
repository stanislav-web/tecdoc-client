/**
 * class Car
 *
 * @returns getManufacturers
 * @returns getModelSeries
 */
class Car {

    /**
     *
     * @param {object} client lib\Client
     */
    constructor (client) {
        this.client = client;
    }

    /**
     * Get car manufacturers
     *
     * @param {object} params
     * @name lib\Client
     * @return {*|Promise.<*>}
     */
    getManufacturers (params) {

        let response = this.client._getRequest({
            'getManufacturers': params
        });
        response = this.client._processResponse(response);
        return response;
    }

    /**
     * Get car models
     *
     * @param {object} params
     * @name lib\Client
     * @return {*|Promise.<*>}
     */
    getModelSeries (params) {
        let response = this.client._getRequest({
            'getModelSeries': params
        });
        response = this.client._processResponse(response);
        return response;
    }
}

/**
 *
 * @type {Car}
 */
module.exports = Car;