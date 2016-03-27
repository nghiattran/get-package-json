'use strict'

var http = require('http')

module.exports = function (pkgName){
  var options = {
    hostname: 'registry.npmjs.org',
    path: ('/' + pkgName)
  }

  return new Promise(function (fulfill, reject) {
    
    if (pkgName === undefined) {
      reject({
        pkgName: undefined,
        msg: 'A package name is required'
      })
    }

    http.get(options, function (res) {
      
      if (res.statusCode !== 200) {
        reject({
          pkgName: pkgName,
          msg : 'Package does not exist.',
        })
      }

      var data = ''
      res
        .setEncoding('utf8')
        .on('data', function (chunk) {
          data += chunk
        })
        .on('end', function (){
          try{
            data = JSON.parse(data)

            fulfill({
              pkgName: pkgName,
              pkg: data
            })
          } catch(err) {
            reject({
              pkgName: pkgName,
              msg : err
            })
          }
        })
    })
  })
}