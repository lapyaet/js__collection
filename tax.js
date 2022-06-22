



//***********  Tax Payment ***********/



function selfRelease(yearlyInCome){
    return yearlyInCome*(20/100)
}

function parentRelease (numberOfParent) {
    if (numberOfParent>=0 && numberOfParent <= 2){
        return numberOfParent * 1000000
    }
}

function marriedRelease (isMarried, numberOfChild) {
    let result = 0 
    if (isMarried ===true) {
        result = result + 1000000 + numberOfChild * 500000
    }else {
        numberOfChild = 0
    }
    return result;
}

function totalRelease (yearlyInCome, numberOfParent, isMarried, numberOfChild) {
    const self = selfRelease(yearlyInCome);
    const parent = parentRelease(numberOfParent);
    const married = marriedRelease(isMarried, numberOfChild);
    return yearlyInCome - (self + parent + married);
}

const total = totalRelease(12000000,0,false,2)
console.log("Total Release:"+ total)

let taxamount = 0
if(total>0 && total <=2000000) {
    taxamount = 0
}else if(total > 2000000 && total <= 5000000) {
    taxamount = taxamount + (total-2000000)* 5/100
}else if(total > 5000000 && total <= 10000000) {
    taxamount = taxamount + (3000000*5/100) + (total-5000000)*10/100
}else if(total > 10000000 && total <= 20000000) {
    taxamount = taxamount + (3000000*5/100) + (5000000*10/100) + (total-10000000)*15/100
}else if(total > 20000000 && total <= 30000000) {
    taxamount = taxamount + (3000000*5/100) + (5000000*10/100) + (10000000*15/100) + (total-20000000)*20/100
}else {
    taxamount = taxamount + (3000000*5/100) + (5000000*10/100) + (10000000*15/100)  + (10000000*20/100) + (total-30000000)*25/100
}

console.log ("yearlyTax is:"+ taxamount)
const month = taxamount/12
console.log ("MonthlyTax is:" + month)