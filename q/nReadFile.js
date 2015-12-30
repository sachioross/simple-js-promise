var Q = require('q');
var fs = require('fs');

/*
    First return a promise from a node FS 
    API call using Q's nfcall function
*/
function stepOne() {
    return Q.nfcall(fs.readFile, "README.md", "utf-8");
}

/*
    Just to ensure the timing is working, 
    process the data and return it in a 
    Promise using Q.fcall method to promisify a simple function.
*/
function stepTwo(data) {
    
    return Q.fcall(function() {
        return data.replace("just get us on the ground!", 
                            "that part'll happen pretty definitely");
    });
}

/* 
    Output the data to ensure everything was 
    processed and passed along correctly
*/
function finalStep(data) {
    console.log("Processed output: \n" + data);
}

// Execution
stepOne()
    .then(stepTwo)
    .then(finalStep)
    .done(); 