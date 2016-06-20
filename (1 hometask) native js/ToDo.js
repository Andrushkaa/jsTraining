function addItem() {
    var input = document.getElementById("todoInput");
    if (input.value) {
        var list = document.getElementById('todoList');
        var newItem = constructToDoItem(input.value);
        list.appendChild(newItem);
        input.value = "";
    }
}

function constructToDoItem(data) {
    var text = document.createElement('span');
    text.innerText = data;
    
    var deleteButton = document.createElement('button');
    deleteButton.innerText = "x";
    deleteButton.setAttribute("onclick","deleteItem(event)");
    deleteButton.style.backgroundColor = "red";
        
    var item = document.createElement('li');
    item.appendChild(text);
    item.appendChild(deleteButton);

    return item;
}

function deleteItem(event) {
    event.target.parentNode.remove();
}