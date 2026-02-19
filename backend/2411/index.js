function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("Register ");
        resolve();
    },1000) 
    })   
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        console.log("sendEmail");
        resolve();
    },8000) 
    }) 
    
}
function login(){
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        console.log("login ");
        resolve();
    },6000) 
   }) 
    
}
function getUserData(){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("getUserData ");
       resolve();
    },2000)  
    
   })
}
function displayData(){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("displayData ");
        resolve();
    },1000)  
  }) 
    
}

async function authenticate(){
    await register();
    await  sendEmail();
    await login();
    await getUserData();
    await displayData();
}

authenticate();
console.log("Other work of application ");
