function triangleNumber(nth){
	if(nth === 1){
		return 1;
	}

	return nth + triangleNumber(nth-1);
}

let triangle = 9;
console.log(triangleNumber(triangle));
