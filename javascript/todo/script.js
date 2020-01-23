var taskText = document.querySelector('#taskText');
var tasks = document.querySelector('#tasks');

taskText.addEventListener('keyup', function (event) {
    if (event.keyCode === 13 && taskText.value) {
        var node = createTaskNode(taskText.value);

        tasks.appendChild(node);
        taskText.value = '';    
    }
});

tasks.addEventListener('click', function (event) {
    var elem = event.target;

    if (elem.classList.contains('remove')) {
        // tasks.removeChild(elem.parentNode);
        elem.parentNode.remove();
    }

    if (elem.classList.contains('done')) {
        elem.classList.toggle('toggle-done');
    }
});

function createTaskNode(txt) {
    var text = document.createTextNode(txt + ' ');
    var li = document.createElement('li');
    var span = document.createElement('span');
    var i = document.createElement('i');

    i.classList.add('fa');
    i.classList.add('fa-trash');
    i.classList.add('remove');
    span.classList.add('done');

    span.appendChild(text);
    li.appendChild(span);
    li.appendChild(i);

    return li;
}