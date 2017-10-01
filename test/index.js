const TecDocClient = require('../lib/client.js');
const assert = require('chai').assert;

describe('TecDoc Client test', function () {

  it("should be as object", function() {
      let client = new TecDocClient({});
      assert.typeOf(client, 'object');
      client.should.be.have.property('_config');
  });

});
