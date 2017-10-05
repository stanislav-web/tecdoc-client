/**
 * class Car
 *
 * @returns getManufacturers
 * @returns getModelSeries
 */
class Car {

    /**
     *
     * @param {object} client lib\mixins\Car
     */
    constructor (client) {
        this.client = client;
    }

    /**
     * Get car manufacturers
     *
     * @param {object} params
     * @name lib\mixins\Car
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
     * @name lib\mixins\Car
     * @return {*|Promise.<*>}
     */
    getModelSeries (params) {
        let response = this.client._getRequest({
            'getModelSeries': params
        });

        response = this.client._processResponse(response);
        return response;
    }

    /**
     * Find a body type by its ID
     *
     * @param {object} params input params
     * @name lib\mixins\Car
     * @return {*|Promise.<*>}
     */
    getMarkById (params) {
        let response = this.client._getRequest({
            'getMarkById': params
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