const chai = require('chai');
const expect = chai.expect;
const exception = require('./exception');

class Input {

    /**
     * Input filter
     *
     * @param {object} rules
     * @param {object} params
     */
    static filter(rules, params) {

        try {
            expect(params).to.be.an('object');

            Object.keys(rules).forEach(function (property) {
                expect(params).to.have.property(property);
                let rs = rules[property].split(',');
                for (let type of rs) {
                    if(type !== 'null') {
                        expect(params[property]).to.be.an(type);
                    }
                }
            });

            return params;

        } catch (err) {
            throw new exception.InputFilterError(err.message);
        }
    }
}

module.exports = Input;