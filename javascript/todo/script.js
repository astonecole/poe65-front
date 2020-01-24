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
    var classes = elem.classList;

    if (classes.contains('remove')) {
        // tasks.removeChild(elem.parentNode);
        elem.parentNode.remove();
    }

    if (classes.contains('valid')) {
        elem.previousSibling.classList.toggle('toggle-valid');
    }

    if (classes.contains('edit')) {
        console.log('edit');
    }
});

function createTaskNode(txt) {
    var text = document.createTextNode(txt + ' ');
    var li = document.createElement('li');
    var span = document.createElement('span');
    var trash = document.createElement('i');
    var valid = document.createElement('i');

    valid.classList.add('fa');
    valid.classList.add('fa-check-circle');
    valid.classList.add('valid');

    trash.classList.add('fa');
    trash.classList.add('fa-trash');
    trash.classList.add('remove');
    span.classList.add('done');

    span.setAttribute('contenteditable', true)

    span.appendChild(text);
    li.appendChild(span);
    li.appendChild(valid);
    li.appendChild(trash);

    return li;
}