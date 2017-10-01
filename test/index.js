const TecDocClient = require('../lib/client.js');
const assert = require('chai').assert;

describe('TecDoc Client test', function () {

    let client;

    it('should be as init object', function () {
        client = new TecDocClient({'provider': 1236676473629});
        assert.typeOf(client, 'object');
        client.should.be.have.property('_config');
    });

    it('should be as config object with properties', function () {
        let config = client.getConfig();
        assert.typeOf(config, 'object');
        config.should.be.have.property('provider');
        config.should.be.have.property('service_url');
        config.should.be.have.property('articleCountry');
        config.should.be.have.property('lang');
    });

    it('should be assigned correctly', function () {
        client = new TecDocClient({
            'provider': 111,
            'articleCountry': 'UKR',
            'lang': 'UA',
        });

        let config = client.getConfig();

        config.should.be.have.value('provider', 111);
        config.should.be.have.value('service_url', 'http://webservicepilot.tecdoc.net/pegasus-3-0/services/TecdocToCatDLB.jsonEndpoint');
        config.should.be.have.value('articleCountry', 'UKR');
        config.should.be.have.value('lang', 'UA');
    });

});
