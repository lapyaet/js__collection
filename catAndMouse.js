


function catAndMouse(catA, catB,mouseC) {
    let result1 = Math.abs(catA-mouseC)
    let result2 = Math.abs(catB-mouseC)
    
    if(result1>result2){
        return("cat A")
    }else if(result1<result2) {
        return("cat B")
    }else {
        return("mouse C")
    }
    
}

let result =catAndMouse(3,5,7)
console.log(result)