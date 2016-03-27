'use strict'

var assert = require('assert')
var packageJson = require('./')

describe('test', function(){

  it('Pass in undefined', function(done) {
    packageJson().catch(function (err) {
      assert.ok(err)
      done()
    })
  })

  it('Get available package', function(done) {
    packageJson('get-ver').then(function (res) {
      assert.ok(res.pkg)
      done()
    })
  })

  it('Get unavailable package', function(done) {
    packageJson('weair,.skfjb').catch(function (err) {
      assert.ok(err)
      done()
    })
  })
})