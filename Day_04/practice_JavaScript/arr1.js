let str="sunny"; 
let obj={}
for(let i=0; i<=str.length-1; i++){
    if(obj[str[i]]==undefined){
        obj[str[i]]=1;
    }else{
        obj[str[i]]++;
    }
}
console.log(obj);


let name="dnkncdollllyyy";
let object={}; 
for(let i=0; i<=name.length-1; i++){
        if(object[name[i]]==undefined){
            object[name[i]]=1;
        }else{
            object[name[i]]++;
        }
}
console.log(object);