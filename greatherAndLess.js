

let Array = [3,5,7,9,6];
let result =0;
let number1 =0;
let number2 = Number.MAX_VALUE;
for(let i=0; i<Array.length; i++){
    
    result = result+Array[i];
}
function greatherThan(arr){
    for(let j=0; j<arr.length; j++) {
        if (number1<result-arr[j]){
            number1 =result-arr[j];    
        }
        
    }
    return number1;
}

let x = greatherThan(Array);
console.log(x);

 function lessThan (no) {
     for(let y=0; y<no.length; y++){
         if(number2>result-no[y]){
             number2 = result-no[y]
         }
     }
     return number2;
 }

 let a = lessThan(Array);
 console.log(a);