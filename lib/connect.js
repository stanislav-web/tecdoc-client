'use strict';

class Connect {

    constructor (...config) {
        this._config = config || {};
    }

    get config () {
        return this._config;
    }

    set config (config) {
        this._config = config;
    }
}

module.exports = Connect;