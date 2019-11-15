#!/usr/bin/node
let args =require('yargs').argv

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
  };
let keys = []
let results = [];

const headToObj = (head) =>{
    keys = head.replace(/\s\s+/g,',').split(",");
}

const tabsToJson = (row) => {
	if(row === '') return;
    let values = row.replace(/\s\s+/g,',').split(",");
    if (values.length === 5)
	{
		values.splice(2,0,"non")
	}
    let result = {}
    for (let index = 0; index < values.length-1; index++) {
        const value = values[index];
        const key = keys[index];
	result[key] = value;
    }
    if(result.Status == "Started" && args.ignore_started)
    {
        return;
    }
    results.push(result);
}
output = args.input.split("\n");
for (let index = 0; index < output.length; index++) {
    const row = output[index];
    switch (index) {
        case 1:
            headToObj(row.trim("/"));
            break;
        case 0 || 2:
            break;
        default:
            tabsToJson(row.trim("/"));
            break;
    }
}
//console.dir(output)
console.log(JSON.stringify(results))