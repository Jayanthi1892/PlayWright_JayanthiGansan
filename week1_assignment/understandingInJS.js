genderType="female"

function printGender(){
    let color="brown"
    if(genderType=="female"){
        var age=30
        let color="pink"
        console.log(`value of variable colour inside if ${color}`)
    }

        console.log(`value of variable colour outside if block and inside function ${color}`)
         console.log("Outside if-block but inside function, age =", age); 
   // console.log("Outside if-block but inside function, color =", color);
}
// console.log("Outside if-block but inside function, color =", color);
console.log(`Global genderType before function call ${genderType}`);
printGender();

genderType = "male";
console.log("\nGlobal genderType after change =", genderType);
printGender();