const TecDocClient = require('../lib/client.js');

describe('TecDoc Client Meta functions() test', () => {

    /**
     *
     * @type {Client}
     */
    let client;

    before(() => {
        client = new TecDocClient({
            'provider': 111,
            'articleCountry': 'UKR',
            'lang': 'EN',
        });
    });

    beforeEach((done) => { // prevent timeout responses
        setTimeout(done, 1000);
    });

    it('should return correct getPegasusVersionInfo()', (done) => {
        client.getPegasusVersionInfo().then((response) => {
            response.should.be.have.value('status', 200);
            response.should.be.have.property('build');
            response.should.be.have.property('date');
            response.should.be.have.property('major');
            response.should.be.have.property('minor');
            response.should.be.have.property('revision');
            response.should.be.have.property('status');
            done();
        });
    });

    it('should return correct getPegasusDbVersionInfo()', (done) => {
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
        });
    });

    it('should return correct getLanguages()', (done) => {
        client.getLanguages().then((response) => {
            response.should.be.have.value('status', 401);
            response.should.be.have.property('statusText');
            response.should.be.have.value('status', 401);
            response.should.be.have.value('statusText', 'Access not allowed');
            done();
        });
    });

    it('should return correct getCountries()', (done) => {
        client.getCountries().then((response) => {
            response.should.be.have.value('status', 401);
            response.should.be.have.property('statusText');
            response.should.be.have.value('status', 401);
            response.should.be.have.value('statusText', 'Access not allowed');
            done();
        });
    });

    it('should return correct getCountryGroups()', (done) => {
        client.getCountryGroups().then((response) => {
            response.should.be.have.value('status', 401);
            response.should.be.have.property('statusText');
            response.should.be.have.value('status', 401);
            response.should.be.have.value('statusText', 'Access not allowed');
            done();
        });
    });
});
