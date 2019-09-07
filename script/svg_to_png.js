var fs = require('fs')
var svg2img = require('svg2img')
var pathResolve = require('path').resolve

var imgDir = pathResolve(__dirname, '../static/images')

svg2img(imgDir + '/surapati.printing.logo.svg', function (error, buffer) {
  fs.writeFileSync(imgDir + '/surapati.printing.logo.svg', buffer)
})
