

var calPoints = function(ops) {
    var result = null;
    var list = [];
    // loop in the array of ops
    let j = 0;
    for(var i = 0; i <= ops.length - 1 ; i++) {
        let isnan = isNaN()
        let value = !isNaN(ops[i]) ? parseInt(ops[i]) : ops[i] ;
        if (!isNaN(ops[i])){
            list.push(value);
        }
        if (value === "+") {
            let value1 = list[list.length -1];
            let value2 = list[list.length - 2];
            list.push(value1 + value2);
        }
        if (value === "D") {
            let value1 = list[list.length - 1] * 2;
            list.push(value1);
        }

        if (value === "C") {
            list.pop();
        }
    }
    for(j = 0; j <= list.length - 1; j++) {
        result = result + list[j];
    }
    return result;
};

console.log(calPoints(["5", "2", "C", "D", "+"]));