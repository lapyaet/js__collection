


function catAndMouse(catA, catB,mouseC) {
    let result1 = math.abs(catA-mouseC)
    let result2 = math.abs(catB-mouseC)
    
    if(result1>result2){
        console.log("catA  catched")
    }else if(result1<result2) {
        console.log("catB catched")
    }else {
        console.log("mouse is running")
    }
    
}
