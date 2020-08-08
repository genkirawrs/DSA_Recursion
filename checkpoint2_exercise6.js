function fibonacciSequence(fibNum, seq){
    let fibSeq = seq || [0,1];


    if(fibNum === 1){
	return 1;
    }else if(fibNum === fibSeq.length){
	let fibAdd = fibSeq[fibSeq.length-1] + fibSeq[fibSeq.length - 2];
	fibSeq.push(fibAdd);
	return fibSeq;
    }else{
	let fibAdd = fibSeq[fibSeq.length-1] + fibSeq[fibSeq.length - 2];
	fibSeq.push(fibAdd);
	return fibonacciSequence(fibNum, fibSeq);
    }

    
}


let result = fibonacciSequence(7);
result.forEach(function (r){
        console.log(r);
});
