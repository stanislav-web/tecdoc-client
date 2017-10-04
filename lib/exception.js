const util = require('util');

/**
 * Request error exception
 *
 * @param {string} status exception status
 * @param {string} message exception message
 * @constructor
 */
function RequestError(status = 'TECDOC-REQUEST', message) {

    this.status = status;
    this.message = message;
}

/**
 * Client error exception
 *
 * @param {string} status exception status
 * @param {string} message exception message
 * @constructor
 */
function ClientError(status = 'TECDOC-CLIENT', message) {

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

    this.status = 'TECDOC-INPUT';
    this.message = message;
}


util.inherits(RequestError, Error);
util.inherits(ClientError, Error);
util.inherits(InputFilterError, Error);

RequestError.prototype.name = 'RequestError';
ClientError.prototype.name = 'ClientError';
InputFilterError.prototype.name = 'InputFilterError';

module.exports = {RequestError, ClientError, InputFilterError};