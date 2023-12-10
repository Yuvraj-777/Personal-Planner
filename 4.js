function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = taskInput.value + '<button onclick="removeTask(this)">Delete</button>';
    taskList.appendChild(li);

    taskInput.value = "";
}

function removeTask(button) {
    var li = button.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
}
