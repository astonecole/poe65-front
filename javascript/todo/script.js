var taskText = document.querySelector('#taskText');
var tasks = document.querySelector('#tasks');

taskText.addEventListener('keyup', function (event) {
    if (event.keyCode === 13 && taskText.value) {
        var text = document.createTextNode(taskText.value + ' ');
        var li = document.createElement('li');
        var i = document.createElement('i');

        i.classList.add('fa')
        i.classList.add('fa-trash');

        li.appendChild(text);
        li.appendChild(i);
        tasks.appendChild(li);

        taskText.value = '';    
    }
});
