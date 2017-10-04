const TecDocClient = require('../lib/client.js');

describe('TecDoc Client Car functions() test', () => {

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

    it('should return correct getManufacturers()', (done) => {
        client.getManufacturers({
            country: 'DE',
            favouredList : 1,
            linkingTargetType: '2',
        }).then((response) => {
            response.should.be.have.value('status', 401);
            response.should.be.have.property('statusText');
            response.should.be.have.value('status', 401);
            response.should.be.have.value('statusText', 'Access not allowed');
            done();
        });
    });

    it('should return correct getModelSeries()', (done) => {
        client.getModelSeries({
            country: 'DE',
            favouredList : 1,
            linkingTargetType: '2',
            manuId: 2
        }).then((response) => {
            response.should.be.have.value('status', 401);
            response.should.be.have.property('statusText');
            response.should.be.have.value('status', 401);
            response.should.be.have.value('statusText', 'Access not allowed');
            done();
        });
    });

});
