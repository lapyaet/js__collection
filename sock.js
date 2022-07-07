

function sockMerchant(n, ar) {
    let newarray = ar.sort((a,b) => a- b)
    let pair = 0
    for(let i=0; i<n; i++) {
        if(newarray[i] === newarray[i+1]) {
            pair++;
            i++;
        }
    }
    return pair;
}

const sockpair = sockMerchant(9, [1,2,4,1,2,4,1,2,1])
console.log(sockpair)
