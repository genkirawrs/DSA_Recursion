//Questions: is there a way to print them out in the order of the object has them in?
//Right now they're being printed out backwards, which I understand is the result of the recursive function


let org = {
    'Zuckerberg': {
	'Schroepfer': {
		'Bosworth': {'Steve':{}, 'Kyle':{}, 'Andra':{'test':{},'hi':{}}},
		'Zhao': {'Richie':{},'Sofia':{},'Jen':{}}
	},
	'Schrage':{
		'VanDyck': {'Sabrina':{}, 'Michelle': {}, 'Josh': {}},
		'Swain': {'Blanch':{}, 'Tom':{}, 'Joe':{}}
	},
        'Sandberg':{
		'Goler': {'Eddie':{}, 'Julie':{}, 'Annie':{}},
		'Hernandez': {'Rowi':{}, 'Inga':{}, 'Morgan':{}},
		'Moissinac': {'Amy':{}, 'Chuck':{}, 'Vinni':{}},
		'Kelley': {'Eric':{}, 'Ana':{}, 'Wes':{}},
        }
    }
}

let chartString = '';

function organize(org, chartString){
      let results = '';

      //for each level down we go, add to the indent
      chartString = chartString + '-';

      let keys = Object.keys(org);
      let orgString = ''

	//loop over keys of the org object
	keys.forEach(key => {
	    //pull whatever is assigned to that key in the object
	    let subOrg = org[key];

	    if(Object.keys(subOrg).length === 0){
		//if we've reached the end of the list, just add the final list of names together to be returned
		let add_to = chartString +'-'+key + '\n';
		orgString = orgString + add_to;
            }else{
		//otherwise, we haven't reached the end of the list yet, pass in new organization list to organize()
		let add_to = organize(subOrg, chartString);
		orgString = chartString +key + '\n' +add_to + orgString;
            }

	});

	results = results + orgString;
/*
//this was my first attempt and it didn't really work - keeping it here to go over later
      Object.entries(org).forEach( ([index, t]) => {
	let subOrg = t;

	results = index + '===' + results + '\n' + chartString + index + '\n';

	Object.entries(subOrg).forEach( ([index, o]) => {
		let orgString = index;
	    if(Object.keys(o).length === 0){
        	orgString = orgString + chartString +'-'+index + '\n';
      	    }else{
		orgString = organize(subOrg, chartString);
	    }
	    results = results + '\n' + orgString;
	});
      });
*/
      return results;
}

let test = organize(org,'');
console.log(test);
