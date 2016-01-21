var assert = require('assert');
var async = require('async');

describe('A basic Webdriver example', function () {

  describe('injected browser executing a Google Search', function () {

    it('performs as expected', function (done) {
      var searchBox;
      var browser = this.browser;
      brower.get('http://localhost:3003')
      	
      
      async.waterfall([
        function(cb) {
          browser.get('http://localhost:3003', cb);
        },
        function(cb) {
          browser.elementsByName('input', cb);
        },
        function(el, cb) {
          loginBox = el;
          loginBox.type('conan', cb);
          console.log("typing");
        },
        function(cb) {
          searchBox.getAttribute('value', cb);
        },
        function(val, cb) {
          try {
            assert.equal(val, 'webdriver');
            cb();
          } catch(e) {
            cb(e);
          }
        }
      ], done);
    });
  });
});