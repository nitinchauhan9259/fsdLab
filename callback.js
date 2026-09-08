function sum(a,b){
    return a+b;
}
function withMsg(callBack,a,b)
{
   console.log("Enter The sum",callBack(2,3));
}
withMsg(sum,2,3);