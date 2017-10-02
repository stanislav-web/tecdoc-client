const util = require('util');

/**
 * Request error exception
 *
 * @param status
 * @param message
 * @constructor
 */
function RequestError(status, message) {

    this.status = status;
    this.message = message;
}

util.inherits(RequestError, Error);
RequestError.prototype.name = 'RequestError';

module.exports = {RequestError};