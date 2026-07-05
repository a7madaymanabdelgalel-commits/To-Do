let title = document.getElementById("title");
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let message = document.getElementById("message");
let taskCount = document.getElementById("taskCount");
let taskList = document.getElementById("taskList");

let count = 0;
addTaskButton.addEventListener("click", function() {
    let taskText = taskInput.value;
    if (taskText === "") {
        message.textContent = "Please enter your task.";
        return;
    }
    let li = document.createElement("li");

    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    let noteInput = document.createElement("input");
    noteInput.type = "text";
    noteInput.placeholder = "Enter a note...";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    li.appendChild(taskSpan);
    li.appendChild(noteInput);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    count++;
    taskCount.textContent = count;
    message.textContent = "Task added successfully";
    taskInput.value = "";

    deleteButton.addEventListener("click", function() {
        li.remove();
        count--;
        taskCount.textContent = count;
        message.textContent = "Task deleted successfully";
    });
});
