const TecDocClient = require('../lib/client.js');
const chai = require('chai');
const assert = chai.assert;

describe('TecDoc Client test', () => {

    /**
     *
     * @type {Client}
     */
    let client;

    before(() =>  {
        client = new TecDocClient({
            'provider': 111,
            'articleCountry': 'UKR',
            'lang': 'UA',
        });
    });

    it('should return version info', (done) => {

        client.getPegasusVersionInfo().then( (value) => {

            value.should.be.have.value('status', 200);
            value.should.be.have.property('build');
            value.should.be.have.property('date');
            value.should.be.have.property('major');
            value.should.be.have.property('minor');
            value.should.be.have.property('revision');
            value.should.be.have.property('status');
            done();
        },  (_) => {
        });
    });

    it('should return db version info', (done) => {

        client.getPegasusDbVersionInfo().then( (value) => {

            value.should.be.have.value('status', 200);
            value.should.be.have.property('build');
            value.should.be.have.property('dataVersion');
            value.should.be.have.property('date');
            value.should.be.have.property('major');
            value.should.be.have.property('minor');
            value.should.be.have.property('refDataVersion');
            value.should.be.have.property('revision');
            value.should.be.have.property('status');
            done();
        },  (_) => {
        });
    });

    it.skip('should return tecDoc languages', function() {
        // client.getLanguages()
    });

    it.skip('should return tecDoc countries', function() {
        // client.getCountries()
    });
    it.skip('should return tecDoc country groups', function() {
        // client.getCountryGroups()
    });
    it.skip('should return tecDoc manufacturers', function() {
        // client.getManufacturers()
    });
    it.skip('should return tecDoc models', function() {
        // client.getModelSeries()
    });

});
