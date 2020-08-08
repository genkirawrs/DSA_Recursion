let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


function navMaze(maze, progress, position){
    let currProgress = progress || [];
    let currPosition = position || [0,0];//starting point is always top left
    let prevMove = currProgress[currProgress.length-1] || '';
    let numRows = maze.length;
    let numCols = maze[currPosition[0]].length;

    let currX = currPosition[0];
    let currY = currPosition[1];
    let tryX = currX + 1;
    let tryLeft = currY - 1;
    let tryY = currY + 1;

    //try to move right first
    if(tryY < numCols && maze[currX][tryY] !== '*' && prevMove !== 'L'){
	if( maze[currX][tryY] === 'e'){
		currProgress.push('R');
		return currProgress;
	}else if( maze[currX][tryY] === ' '){
		currProgress.push('R');
		currPosition = [currX,tryY];
		return navMaze(maze, currProgress, currPosition);
	}
    }else if(tryX < numRows && maze[tryX][currY] !== '*'){
	//otherwise try to move down
	if( maze[tryX][currY] === 'e'){
		currProgress.push('D');
		return currProgress;
	}else if( maze[tryX][currY] === ' '){
		currProgress.push('D');
		currPosition = [tryX,currY];
		return navMaze(maze, currProgress, currPosition);
	}
    }else if( tryLeft >= 0 && maze[currX][tryLeft] !== '*'){
	//try and move left then
	currProgress.push('L');
	currPosition = [currX,tryLeft];
	return navMaze(maze, currProgress, currPosition);
    }

}

//navMaze(mySmallMaze);

//let navigation = navMaze(mySmallMaze);
let navigation = navMaze(maze);
navigation.forEach(function (r){
        console.log(r);
});
