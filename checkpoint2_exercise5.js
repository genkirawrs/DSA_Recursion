function stringSplitter(stringToSplit, splitOn, words){
    let str = stringToSplit.trim();
    let wordList = words || [];
    let splitIndex = str.indexOf(splitOn);

    if(splitIndex !== -1){
	wordList.push(str.substr(0,splitIndex));
	return stringSplitter(str.slice(splitIndex+1), splitOn, wordList);
    }else{
	wordList.push(str);
	return wordList;
    }

}

let stringToSplit = '08/04/2020';

let result = stringSplitter(stringToSplit,'/');
result.forEach(function (r){
	console.log(r);
});
