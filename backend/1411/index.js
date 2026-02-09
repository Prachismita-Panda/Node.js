const fullfilled = false;
const promise = new Promise((resolve,reject)=>{
    if(fullfilled==true){
        resolve();
    }
    else{
        reject();
    }

});
console.log(promise);