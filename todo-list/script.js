
const task_list = document.getElementById('taskList')

function addTask(){
    const val = document.getElementById('taskInput').value.trim()

    if (val===""){
        alert("Please enter a task")
    }

    const task = document.createElement('li')
    const taskText = document.createTextNode(val)

    const complete_btn = document.createElement('button')
    complete_btn.textContent = 'Complete'
    complete_btn.onclick = function(){
        task.classList.add('completed')
    }

    task.appendChild(taskText)
    task_list.appendChild(task)
    task.appendChild(complete_btn)

    document.getElementById('taskInput').value = ""
}