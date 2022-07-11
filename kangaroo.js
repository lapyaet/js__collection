


function kangaroo(x1, v1, x2, v2,) {
    let jump = 4
    if(x1+(v1*jump) === x2+(v2*jump)){
        return "YES"
    }else {
        return "NO"
    }
}
let result = kangaroo(0,3,4,2,4)
console.log(result)