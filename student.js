let students = [
    {
      name: "David Rayy",
      mark: 12,
    },
    {
      name: "NYAN Rayy",
      mark: 1,
    },
    {
      name: "KO Rayy",
      mark: 2,
    },
    {
      name: "LIN Rayy",
      mark: 40,
    },
    {
      name: "TIN Rayy",
      mark: 90,
    },
    {
      name: "DEOK Rayy",
      mark: 1,
    },
    {
      name: "KOOO Rayy",
      mark: 100,
    },
];
function studentArray (arr) {
    let studentMark =0 
    let studentName = students[0]
    for(let i=0; i<students.length; i++){
        if (studentMark < students[i].mark){
            studentName =arr[i]
        }
    }
    return studentName.name
}
let x = studentArray(students)
console.log(x)