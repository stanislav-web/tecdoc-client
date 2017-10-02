const util = require('util');

/**
 * Request error exception
 *
 * @param {int} status exception status
 * @param {string} message exception message
 * @constructor
 */
function RequestError(status, message) {

    this.status = status;
    this.message = message;
}

/**
 * Client error exception
 *
 * @param {string} message exception message
 * @constructor
 */
function ClientError(message) {

    this.status = null;
    this.message = message;
}


util.inherits(RequestError, Error);
util.inherits(ClientError, Error);

RequestError.prototype.name = 'RequestError';
ClientError.prototype.name = 'ClientError';

module.exports = {RequestError, ClientError};