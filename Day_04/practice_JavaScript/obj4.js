// copy one object into another object 
// Using a    ********   Spread Operator   *********
let obj1={
    pin:208012,
    name:"chnnu",
    fame:"munnu"
};
let obj2={
    salary:"10,000",
    class: "3rd",

}
let details={
    ...obj1,...obj2,
}
console.log(details);