XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var get_meta_tags = require('/Users/kvz/code/phpjs/src/php/url/get_meta_tags.js')

describe.skip('php.url.get_meta_tags.js', function () {
  it('should pass example 1', function (done) {
    get_meta_tags('http://kevin.vanzonneveld.net/pj_test_supportfile_2.htm');
    var expected = {description: 'a php manual', author: 'name', keywords: 'php documentation', 'geo_position': '49.33;-86.59'}
    var result = get_meta_tags('http://kevin.vanzonneveld.net/pj_test_supportfile_2.htm');
    expect(result).to.deep.equal(expected)
    done()
  })
})