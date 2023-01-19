'use strict';

function BinarioADecimal(num) {
let decimal = 0
let exp_ = 0

  exp_ = num.length
  for (let i=0; i < length; i++ ){
    if (num === '1') decimal = decimal + 2**exp_
  }
  return decimal
}

function DecimalABinario(num) {}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
