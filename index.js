// Return a simple promise
function stepOne(item) {
    
    console.log("It all begins in step one");
    
    return new Promise(function(resolve, reject) {
        resolve(process.argv[2] ? process.argv[2] : true);
    });
}

// A step that makes a decision based on the data, returning a 
// unique promise per each branching decision
function stepTwo(data) {
    
    console.log("Step two with data: " + data);
    
    if (data !== true && data !== "true") {
        return new Promise(function(resolve, reject) {
            reject(new Error("Well that didn't work"));
        });
    } else {
        return new Promise(function(resolve, reject) {
            resolve(process.argv[3] ? process.argv[3] : "good");
        });
    }
}

// A step that uses closure to return a resolve or reject purely based
// on the interpretation of the data. 
function stepThree(data) {
    
    console.log("Step three with data: " + data);
    
    return new Promise(function(resolve, reject) {
        if (data.indexOf("good") > -1) {
            resolve("All is well");
        } else {
            reject("Something's missing");
        }
    });
}

// And a final step to simply report out on what happened.
function stepFour(data) {
    console.log("Step 4, the omega, with data: " + data);
}

stepOne()
    .then(stepTwo)
    .then(stepThree)
    .then(stepFour)
    .catch(function(error) { console.log("Uh ohs", error); });