'use strict';

function BinarioADecimal(num) {
let decimal = 0
let exp_ = 0

  exp_ = num.length - 1
  for (let i=0; i < num.length; i++ ){
    if (num[i] === '1') decimal = decimal + 2**exp_
    exp_--
  }
  return decimal
}

BinarioADecimal('1100')


function DecimalABinario(num) {
let numBin_ = ''

  while (num!==0){
    numBin_ = num % 2 + numBin_
    if (num % 2 === 1) num = (num / 2) - 0.5
    else num = num/2
  }

return numBin_
}

DecimalABinario(8)


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
