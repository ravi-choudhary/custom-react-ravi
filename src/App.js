import React from "react";
import List from "./components/List";
import Custom from "./Custom";

const mycustomArray=[1, 2, 4, 6, 8];
const mycustomArrays=[4, 8, 4, 6, 8];

function double(x){
  return x*2
}

var traceNumber=mycustomArray.map(double);
console.log(traceNumber);
console.log("testing");


var number=[]


mycustomArrays.forEach(function(x){
    number.push(x*2);
});

console.log(number);

console.log("this is test message do you know about it. do you know me");
console.log("testing");




function App(){
  return <div className="custom-img-container">
      <List imgURL={Custom[0].imgURL} headingTEXT={Custom[0].headingTEXT} paraTEXT={Custom[0].paraTEXT}  />
      <List imgURL={Custom[1].imgURL} headingTEXT={Custom[1].headingTEXT} paraTEXT={Custom[1].paraTEXT}  />
      <List imgURL={Custom[2].imgURL} headingTEXT={Custom[2].headingTEXT} paraTEXT={Custom[2].paraTEXT}  />
  </div>
 
}


export default App;

