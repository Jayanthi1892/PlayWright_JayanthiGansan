
const browserName = "Chrome"; // Global scope
// Function using var
function getBrowserNameVar() {
    console.log("Now  Using var ");
    if (browserName === "Chrome") {
        // Shadows global variable, function-scoped
        var browserName = "Firefox"; 
        console.log("Inside if-block (var):", browserName); // Firefox
    }
    // var is function-scoped, so still accessible here
    console.log("Outside if-block but inside function (var):", browserName); // Firefox
}

// Function using let
function getBrowserNameLet() {
    console.log("-->Using let now");
    if (browserName === "Chrome") {
        // Shadows global variable, block-scoped
        let browserName = "Firefox"; 
        console.log("Inside if-block (let):", browserName); // Firefox
    }
    // let is block-scoped, so here it refers to the global variable
    console.log("Outside if-block but inside function (let):", browserName); // Chrome
}

console.log("Global browserName before function calls:", browserName);

getBrowserNameVar();
getBrowserNameLet();

console.log("Global browserName after function calls:", browserName);

//browserName = "test"; 
//console.log("Global browserName after redeclare:", browserName); to check error on const redeclaration.

//to refer
/*var is function-scoped so Declaring var browserName inside the if block shadows the global variable for the entire function.
let is block-scoped and Declaring let browserName inside the if block shadows the global variable only inside that block.
Global variable remains unchanged
Both var and let shadowing do not modify the global const browserName.
**/