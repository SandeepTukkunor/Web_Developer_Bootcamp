// built in array methos 
// 1 push/pop
// 2 shift/unshift
// indexOf
//slice
// documentation  at : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var colors = ["red", "orenge", "yellow"] // some colors

//to add one more color to the varibale, we have to do it by colors[3] = 'green'

//But with the help of built in method "push" it can be done easily 

colors.push("indigo") // adding the color with push method

// output will be  : ["red", "orenge", "yellow", "indigo"]

// now about "pop"

//basically pop removes the last element of the variable

colors.pop() // it doenst take the input but the last element of the array

// unilike push and pop , the methods shift and unshift will add the element in the beginng of the array 

// unshift used to add an element at the first element of the array 
var colors = ["orenge", "yellow", "indigo"]
colors.unshift("brown ") // adding brown at the beginnig 
// outut looks like  ["brown " "orenge", "yellow"]

// and similarly shift will remove the first element of the var 





//indexOf will return at what place the elemnt is present 
var colors = ["orenge", "yellow", "indigo"]
colors.indexOf("yellow") // checking what place the yellow is present 

// output will be 1 


// if the element is not present, the output will be -1
colors.indexOf("white") // returns -1




//"SLICE"

// we can use the method slice to grab some part of the array 
//Ex..
var colors = ["orenge", "yellow", "indigo", "brown", "white" ];

var favCols = colors.slice(1,3)

// output will be   ["yellow", "indigo"]
// it includes the first element specified but does not include the last element specified 













