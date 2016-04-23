XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var htmlspecialchars = require('/Users/kvz/code/phpjs/src/php/strings/htmlspecialchars.js')

describe('php.strings.htmlspecialchars.js', function () {
  it('should pass example 1', function (done) {
    htmlspecialchars("<a href='test'>Test</a>", 'ENT_QUOTES');
    var expected = '&lt;a href=&#039;test&#039;&gt;Test&lt;/a&gt;'
    var result = htmlspecialchars("<a href='test'>Test</a>", 'ENT_QUOTES');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    htmlspecialchars("ab\"c'd", ['ENT_NOQUOTES', 'ENT_QUOTES']);
    var expected = 'ab"c&#039;d'
    var result = htmlspecialchars("ab\"c'd", ['ENT_NOQUOTES', 'ENT_QUOTES']);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    htmlspecialchars('my "&entity;" is still here', null, null, false);
    var expected = 'my &quot;&entity;&quot; is still here'
    var result = htmlspecialchars('my "&entity;" is still here', null, null, false);
    expect(result).to.deep.equal(expected)
    done()
  })
})