function GrardeStuSCore(score){
   // Input validation for score between 1 to 100
   let validcheck=true
    if (typeof score !== "number" ) {
        validcheck=false
        console.log("Invalid input: score must be a number.");
    }
    if (score < 0 || score > 100) {
        validcheck=false
        console.log("Invalid score: must be between 0 and 100.");
    }

   switch(validcheck){
    case (score>=80):
    console.log("Grade is A for the given score")
    break
    case (score>=50):
        console.log("Grade for given score is B")
        break
    case (score>=35):
        console.log("Grade for given score is C")
        break
        case (score<35):
        console.log("The garde for given score is FAIL")
   }
   

}
GrardeStuSCore(100)
GrardeStuSCore("abc")
GrardeStuSCore(75)
GrardeStuSCore(40)
GrardeStuSCore(150)