describe('shout(string)', () => {
  it('receives one argument and returns it in all caps', () => {
  })
})
expect(shout('hello')).toEqual('HELLO')
function shout(string){
  return string.toUpperCase()
}

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})
expect(whisper('WINTER')).toEqual('winter')
function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
console.log (string.toUpperCase())
}

function logWhisper(string){
  console.log (string.toLowerCase())
}

function sayHiToGrandma(string){
if (string === string.toLowerCase){
  return "I can't Hear ypu"
}

}
