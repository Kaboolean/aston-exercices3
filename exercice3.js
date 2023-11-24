//base 10
const decimalToBinary = function(decimalNumber){
  let result = ""

  while(decimalNumber > 0){
    const modulo = decimalNumber % 2
    result = modulo + result

    decimalNumber = Math.floor(decimalNumber / 2)
  }

  return result
  
}

const test = decimalToBinary(59)
console.log(test)


