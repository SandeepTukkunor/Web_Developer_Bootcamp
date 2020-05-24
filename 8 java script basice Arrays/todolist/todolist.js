var todos = ["Buy a new turtle"];
var input = prompt("what would you like to do ?")






while(input != "quit"){
    if(input=== 'list') {
        console.log(todos);
    } else if(input=== "new"){
        //ask for new to do 
        var newTodo = prompt("enter new todo");
        todos.push(newTodo);
    }


    input = prompt("what would you like to do ?")
}
console.log("ok you quit the app ")