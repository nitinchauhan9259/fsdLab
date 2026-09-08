function test1(cb){
    setTimeout(()=>{
        console.log("Test 1");
        cb();
    },20000);
};
function test2(cb){
  setTimeout(() => {
    console.log("Test 2");
    cb();
  }, 10000);
};
function test3()
{
  setTimeout(() => {
    console.log("Test 3");
    cb();
  }, 50000);
};
function test4(cb){
    setTimeout(() => {
      console.log("Test 4");
      
    }, 50000);
}
test1(()=>{
    test2(()=>{
        test3(()=>{
            test4();
        });
    });
});

