// Ecma Script version 2006 //

// rest parameters 

const sum=(num1,num2,...numbers)=>{
    let s=0;
    if(numbers.length>0){
    let s=numbers.reduce((a,b)=>a+b)
    }
    console.log("sum of numbers = ",(num1+num2+s));
}
sum(10,20,50,30,90);    //after 20 all values are rest value which goes to ...numbers
// sum(20,20)