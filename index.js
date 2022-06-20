

 function totalRelease(numberOfParents, isMarried,numberOfChild) {
     if(numberOfParents ===2){
        numberOfParents= 2000000
     }else if (numberOfParents ===1){
         numberOfParents=1000000
   }else{
       numberOfParents= 0
   }

   if(isMarried ===true) {
       isMarried = 1000000
   }else {
       isMarried = 0
       numberOfChild =0
   }
   return numberOfParents + isMarried + numberOfChild*500000
 }

  let x = totalRelease(2, true, 3)
  console.log(x)

 function tax(yearInCome,x) {
    if (yearInCome >2000000 && yearInCome <5000001){
        return yearInCome- (yearInCome-x)*5/100
    }else if (yearInCome >=5000001 && yearInCome <10000000){
        return yearInCome- (yearInCome-x)*10/100
    }else if  (yearInCome >=10000001 && yearInCome <20000000){
        return yearInCome-(yearInCome-x)*15/100
    }else if (yearInCome >=20000001 && yearInCome <30000000){
        return yearInCome-(yearInCome-x)*20/100
    }else if(yearInCome >=30000001){
        return yearInCome- (yearInCome-x)*25/100
    }else {
        return yearInCome
    }
 }

let y =tax(3600000, x)
console.log(y)