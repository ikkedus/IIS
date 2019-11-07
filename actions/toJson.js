#!/usr/bin/node
let args =require('yargs').argv

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
  };
let keys = []
let results = [];

const headToObj = (head) =>{
    keys = head.split("\t");    
}

const tabsToJson = (row) => {
    let values = row.split("\t");
    let result = {}
    for (let index = 0; index < values.length; index++) {
        const value = values[index];
        const key = key[index];
        result[key] = value;
    }
    results.push(result);
}
output = args.input.split("\n");
for (let index = 0; index < output.length; index++) {
    const row = output[index];
    switch (index) {
        case 0:
            headToObj(row);
            break;
        case 1:
            break;
        default:
            tabsToJson(row);
            break;
    }
}
console.dir(results)