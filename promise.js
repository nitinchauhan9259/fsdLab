function f1()
{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Hi");
        resolve();
      }, 4000);
    });
}
function f2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("Nitin");
        resolve();
        },3000);
    });
}
function f3()
{
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
           console.log("Chauhan");
           resolve();
         }, 3000);
    })
}
f1().then(()=>{
    return f2().then(()=>{
        return f3();
    });
})
.catch((err)=>{
    console.log("Error",err)
});