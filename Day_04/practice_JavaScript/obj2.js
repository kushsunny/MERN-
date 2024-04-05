let x=20; 
let y; 
console.log(x);
// defind undefind value 
console.log(y);  //undefind

let arr=[1,2,3,4,25]; 
console.log(arr[-1]) //undefind
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5]) //undefind

let details={
    name:"sunny",
    age: 22, 
    location: "ghaziabad",
    pincode: "208012", 
    maths: 90,
    english: 80,
    language: 85,
    name:"aman"   // always assign latest value
}
details.hobbies="cricket";
delete details.age
console.log(details);
console.log(details.name)
console.log(details.age)
console.log(details.location)
console.log(details.pincode)
console.log(details.maths)
console.log(details.english)
console.log(details.language)





