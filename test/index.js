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

    beforeEach((done) => { // prevent timeout responses
        setTimeout(done, 5000);
    });

    it('should return version info', (done) => {

        client.getPegasusVersionInfo().then((response) => {
            response.should.be.have.value('status', 200);
            response.should.be.have.property('build');
            response.should.be.have.property('date');
            response.should.be.have.property('major');
            response.should.be.have.property('minor');
            response.should.be.have.property('revision');
            response.should.be.have.property('status');
            done();
        }).catch((error) => {
            console.error(error.assertion.params.previous._message);
        })
    });

    it('should return db version info', (done) => {

        client.getPegasusDbVersionInfo().then((response) => {
            response.should.be.have.value('status', 200);
            response.should.be.have.property('build');
            response.should.be.have.property('dataVersion');
            response.should.be.have.property('date');
            response.should.be.have.property('major');
            response.should.be.have.property('minor');
            response.should.be.have.property('refDataVersion');
            response.should.be.have.property('revision');
            response.should.be.have.property('status');
            done();
        }).catch((error) => {
            console.error(error.assertion.params.previous._message);
        })
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
