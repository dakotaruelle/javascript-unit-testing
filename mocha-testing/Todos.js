function ToDosContainer(){
    this.todos = [];
}

ToDosContainer.prototype.addTodo = function(item) {
    this.todos.push(item)
}

ToDosContainer.prototype.getItems = function() {
    return this.todos;
}