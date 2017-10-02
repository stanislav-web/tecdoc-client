const TecDocClient = require('../lib/client.js');
const chai = require('chai');
const assert = chai.assert;

describe('TecDoc Client config test',  () => {

    let client;

    it('should return valid config',  () => {
        client = new TecDocClient({'provider': 1236676473629});
        assert.typeOf(client, 'object');
        client.should.be.have.property('_config');
    });

    it('should return spicific config properties', () => {
        let config = client._config;
        assert.typeOf(config, 'object');
        config.should.be.have.property('provider');
        config.should.be.have.property('service_url');
        config.should.be.have.property('articleCountry');
        config.should.be.have.property('lang');
    });

    it('should be assigned correctly', () => {
        client = new TecDocClient({
            'provider': 111,
            'articleCountry': 'UKR',
            'lang': 'UA',
        });

        let config = client._config;

        config.should.be.have.value('provider', 111);
        config.should.be.have.value('service_url', 'http://webservicepilot.tecdoc.net/pegasus-3-0/services/TecdocToCatDLB.jsonEndpoint');
        config.should.be.have.value('articleCountry', 'UKR');
        config.should.be.have.value('lang', 'UA');
    });
});
