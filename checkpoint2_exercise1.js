function countSheep(totalSheep) {
    // Base case
    if (totalSheep === 0) {
        console.log('All sheep jumped over the fence');
	return;
    }
    // General case
    console.log(totalSheep+": Another sheep jumps over the fence\n");
    countSheep(totalSheep - 1);

}

countSheep(3);
