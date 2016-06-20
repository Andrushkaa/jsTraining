
function addItem() {
    var input = $('#todoInput')[0];
    if (input.value) {
        $('<li>'+ '<span>' + input.value +'</span>' + '<button>' + 'x'+ '</button>' +'</li>').appendTo('#todoList');
        $('#todoList li button').on('click', function(){
            $(this).parent().remove();
        });
        input.value = '';
    }
}