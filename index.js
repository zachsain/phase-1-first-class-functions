const chai = "chai"

const spies = "chai-spies"

function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return (function withName (){
        console.log("could it?")
    })
}

function returnsAnAnonymousFunction() {
    return (function () {
        console.log("I doubt this works")
    })
}