


console.log('return', global === this)
console.log('return', module === this)

console.log('return', module.exports === this)



this.digaOi = function(){

    console.log('Oi!!!')

}

//or

module.exports.digaOi = function(){

    console.log('Oi!!!')
    
}