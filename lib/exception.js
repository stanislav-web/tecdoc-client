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
 * @param {int} status exception status
 * @param {string} message exception message
 * @constructor
 */
function ClientError(status = 500, message) {

    this.status = status;
    this.message = message;
}

/**
 * InputFilterError error exception
 *
 * @param {string} message exception message
 * @constructor
 */
function InputFilterError(message) {

    this.status = 400;
    this.message = message;
}


util.inherits(RequestError, Error);
util.inherits(ClientError, Error);
util.inherits(InputFilterError, Error);

RequestError.prototype.name = 'RequestError';
ClientError.prototype.name = 'ClientError';
InputFilterError.prototype.name = 'InputFilterError';

module.exports = {RequestError, ClientError, InputFilterError};