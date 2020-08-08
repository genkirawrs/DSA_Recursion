function powerCalculator(base, exponent){
	if(exponent < 0){
		return 'exponent should be >= 0';
	}else if(exponent === 1) {
		return base;
	}else if(exponent === 0){
		return;
	}

	return base * powerCalculator(base, exponent - 1);
}

let powerCal = powerCalculator(10,2);
console.log(powerCal);

powerCal = powerCalculator(10,-2);
console.log(powerCal);

powerCal = powerCalculator(10,3);
console.log(powerCal);
