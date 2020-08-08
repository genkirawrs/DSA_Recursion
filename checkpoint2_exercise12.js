function calcBinary(intValue, binary){
    let currBinary = binary || '';
    let remainder = String(intValue % 2);
	currBinary = remainder + currBinary;
    let quotient = Math.floor(intValue/2);
    let bit = "0";
console.log(intValue + " and " + quotient + " and " + remainder + " and " + currBinary);
    if(quotient === 0){
	return currBinary;
    }else{
	currBinary = calcBinary(quotient,currBinary);
    }
    return currBinary;
}

let test = calcBinary(25,'');
console.log(test);
