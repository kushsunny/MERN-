let add=function(a,b){
    console.log(a+b)
}
add(1,1);

let brush=function(){
    console.log("Please brush your teeth first");
}


function eatBreakfast(item,time,brush){
    brush();
    console.log("I will eat"+" "+item+" "+"as my breakfast"+" "+"at"+" "+time);
};
eatBreakfast("idli","9 AM",brush);


