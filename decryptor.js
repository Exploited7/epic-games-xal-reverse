const fs = require('fs')

function decodeData(encodedData) {
  var xxx = "FZMÛSê/·V«xÞhí¢³4<`ô2ª,µ¦Yû"
  var b
  var d = []
  var e = 0
  var f = ""

  for (var g = 0; g < 256; g++) {
    d[g] = g
  }
  for (var h = 0; h < 256; h++) {
    e = (e + d[h] + xxx.charCodeAt(h % xxx.length)) % 256
    b = d[h]
    d[h] = d[e]
    d[e] = b
  }

  var i = 0
  e = 0

  var c = atob(encodedData)

  for (var j = 0; j < c.length; j++) {
    e = (e + d[i = (i + 1) % 256]) % 256
    b = d[i]
    d[i] = d[e]
    d[e] = b
    f += String.fromCharCode(c.charCodeAt(j) ^ d[(d[i] + d[e]) % 256])
  }

  var decoded = decodeURIComponent(escape(f))

  var x = JSON.parse(decoded)

  var xString = JSON.stringify(x)

  fs.writeFileSync('x_value.txt', xString)

  return x;
}



console.log(decodeData('real xal value here'))
