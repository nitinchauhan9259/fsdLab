
//   function myInfo(callBack)
//   {
//     let name=prompt("Enter Your Name");
//     let password=prompt("Enter your Password");
//     return callBack(name,password);
// }
// function matchInfo(Username,passWord)
// {
//     if(Username=="Nitin Chauhan" && passWord=="Nitin@9259")
//     {
//         console.log("Match Password");
//     }
//     else{
//         console.log("Invalid userName and Password");
//     }
// }

// myInfo(matchInfo);
function myInfo()
{
    let UserName=prompt("Enter your Name");
    let userPassword=prompt("Enter your Password");
    matchInfo(UserName,userPassword);
}
function matchInfo(userName ,UserPassWord)
{
     if(userName=="Nitin Chauhan" && UserPassword=="Nitin@9259")
     {
        console.log("Password Match ");
     }
     else{
        console.log("Password and Username Invalid");
     }
}
myInfo();

