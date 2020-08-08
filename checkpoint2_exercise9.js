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

function navMaze(maze, progress, position, routes){
    let currProgress = progress || [];
    let currPosition = position || [0,0];//starting point is always top left

    let prevRoutes = routes || [];

    let prevMove = currProgress[currProgress.length-1] || '';
    let numRows = maze.length;
    let numCols = maze[currPosition[0]].length;

    let currX = currPosition[0];
    let currY = currPosition[1];
    let tryDown = currX + 1;
    let tryUp = currX - 1;

    let tryLeft = currY - 1;
    let tryRight = currY + 1;


    //try to move right first
    if(tryRight < numCols && maze[currX][tryRight] !== '*' && prevMove !== 'L'){
	if( maze[currX][tryRight] === 'e'){
		currProgress.push('R');
		return currProgress;
	}else if( maze[currX][tryRight] === ' '){
		if( maze[currX][tryLeft] === ' ' && tryLeft > 0 && prevMove !== 'L'){
		    maze[currX][tryLeft] = 'J';
		}

		if( maze[tryDown][currY] === ' ' ){
		    maze[tryDown][currY] = 'J';
		}

		currProgress.push('R');
		currPosition = [currX,tryRight];
		return navMaze(maze, currProgress, currPosition);
	}
    }else if(tryDown < numRows && maze[tryDown][currY] !== '*'){
	//otherwise try to move down
	if( maze[tryDown][currY] === 'e'){
		currProgress.push('D');
		return currProgress;
	}else if( maze[tryDown][currY] === ' '){
		currProgress.push('D');
		currPosition = [tryDown,currY];
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
let navigation = [];
let routes = [];
let progress = [];
let position = [0,0];

routes.push(navMaze(mySmallMaze, progress, position, navigation));
//let navigation = navMaze(maze);
routes.forEach(function (r){
        console.log(r);
});
console.log(mySmallMaze);
