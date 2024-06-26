let resume={
    "name":"bala",
    "DOB":"29.09",
    "qualification":"BSc",
    "Skills":"Fullstockdeveloper",
    "language":"english",
    "nationality":"indian",
    "Hoobby":" Playing Chess",
    "Status":"Unmarried"

}
console.log(resume.name)
console.log(resume.DOB)
console.log(resume.qualification)
console.log(resume.Skills)
console.log(resume.language)
console.log(resume.nationality)
consolee.log(resume.Hobby)
console.log(resume.status)
// for in loop
for (key in resume){
    console.log(resume[key])
}
////for of loop
let data=Object.entries(resume)
for (let [key,value] of data){
console.log(value);
}
// for each
data.forEach(([key,val])=>console.log(val))

