var friend1 = "sandeep";
var friend2 = "sunil"
var friend3 = "anil";
var friend4 = "Shivu"

// As we can see that there is a lot of repeated code (Not considered as DRY)

// rather than having 4 saperate variable , we can do it in one variable

var friends = ["sandeep", "sunil", "anil", "shivu"]
//here "sandeep" takes 0th place 

// for accesing the perticualr variable from the array
// assume i want to grab sandeep from variable friends , i can just type
console.log(friends[0]); // this will grab the 0th element of the variable

// we can also chage the elements in the variable
friends[0] = "Nagu"; // from the past output we have got 0th element is sandeep , and it will be replaced by Nagu

// and we may have noticed that there are 4 element in the array and indexing starts from 0, so basically we have from 0 to 3
// What if we want to add another friends name
friends[4] = "Sagar";// the 4th element of the arry 

//once we run this , we will get 
["Nagu", "sunil", "anil", "shivu","Sagar" ]



// we can initialize the array in two ways
var friends = []// cerates an empty array, no friends
var friends = new Array() //Uncommon 


// arrays can hold any type of data

var random_collection = [49, true, "heroine", null];


//arrys have a length property 
var nums = [12,12,34,23]; //random numbers 

// by command nums.length 
nums.length // we will get 4 





