// print reverse 
function printReverse(arr){
    for(var i = arr.length - 1;i >= 0;i--) {
        console.log(arr[i]);

    }




}

printReverse([4,5,6,3,7])

// uniform of the function : isUniform 
function isUniform(arr) {
    var first = arr[0];
    for(var i = 1; i <arr.length; i++){
        if(arr[i] !== first){
            return false;
        }
    }
    return true;
    
}

// the alternative for this is 
// function isUniform(arr) {
//     var first = arr[0];
//     arr.forEach(function(element) {



//         if(element !== first){
//             return false;
//         }
        
//     });
    
//     return true;
// }




//Sum of array  : use the fuction sumArray

function sumArray(arr){
    var total = 0;
    arr.forEach(function(element) {
        total += element;

        
    });
    return total;
}



// max of the array, Use max
function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}
