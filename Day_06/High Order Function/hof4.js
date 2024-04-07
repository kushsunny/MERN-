let arr=[1,2,3,4,5,6]; 

let even_arr=arr.filter(function (item,index){
    return index%2==0;
}); 
console.log(even_arr);

let bag="";
arr.map(function(item,index){
    bag=bag+item;
});
console.log(bag); 
 
arr.forEach(function(item,index){
    bag=bag+item;
})
console.log(bag)