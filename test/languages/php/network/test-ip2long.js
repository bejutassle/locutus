XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var ip2long = require('/Users/kvz/code/phpjs/src/php/network/ip2long.js')

describe('php.network.ip2long.js', function () {
  it('should pass example 1', function (done) {
    ip2long('192.0.34.166');
    var expected = 3221234342
    var result = ip2long('192.0.34.166');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    ip2long('0.0xABCDEF');
    var expected = 11259375
    var result = ip2long('0.0xABCDEF');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    ip2long('255.255.255.256');
    var expected = false
    var result = ip2long('255.255.255.256');
    expect(result).to.deep.equal(expected)
    done()
  })
})