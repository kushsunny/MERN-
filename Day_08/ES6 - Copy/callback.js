const sum=(num1,num2,print)=>{
    let s=num1+num2;
    print(s);
    // print("sum="+(num1+num2));
}

const print=(msg)=>{
    console.log(msg);
}
// let msg=sum(10,20); 
// print(msg);
sum(20,30,(sum)=>{
    if(sum>20){
        console.log("Greater than 20");
    }else{
        console.log("Less then 20");
    }  
});