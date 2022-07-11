



function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let newApples = apples.map(x => (x+a));
    let newOranges = oranges.map(x => (x+b));
    function result (y) {
        let count =0
        for(let i=0; i<y.length; i++) {
            if(s <=y[i] && t >= y[i]) {
                count++
            } 
        }
        return count
    }
    console.log(result(newApples))
    console.log(result(newOranges))
}

countApplesAndOranges(7, 10, 4, 12, [2,3,-4], [3,-2,-4]);