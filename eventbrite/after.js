function after (num, func){
  let tracker = 0;

  //need to return a new function
  return function(...args){
    //check if tracker exceeds num
    if(tracker >= num){
      //call func
      func().apply(null, args)
    } else {
      //increment tracker
      tracker = tracker + 1
    }
  }
}

//sample calls
var func1 = () => console.log("first one");
var func2 = (x) => console.log("the 2nd", x);

var newFunc1 = after(3, func1);
var newFunc2 = after(2, func2);

newFunc1();
newFunc1();
newFunc1();
newFunc1(); // actually calls func1()

newFunc2();
newFunc2();
newFunc2(); // actually calls func2()
