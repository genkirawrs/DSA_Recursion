function factoral(num){
        if(num < 0){
                return 'number should be >= 0';
        }else if(num === 0){
                return 1;
	}
        return num * factoral(num-1);
}

console.log(factoral(5));

