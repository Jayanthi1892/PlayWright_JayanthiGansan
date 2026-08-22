function launchBrowser(browserType){

    if(browserType==="chrome"){
console.log(`Browser type is chrome`)
    }else{
        console.log(`Browser type is edge`)
    }

}

function runTest(testType){
    switch(testType){
    case "regression":
console.log(`this isRegression test type`)
case "basic":
console.log(`this is basic test type`)
default:
    case "regression":
console.log(`this is smoke
     test type`)

}
}
 launchBrowser("chrome")
 runTest("defcheck")
 
 launchBrowser("test")
 runTest("basic")


