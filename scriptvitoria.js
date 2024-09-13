// Seleciona os elementos da página
const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Função para adicionar uma nova tarefa
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    // Botão para remover a tarefa
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remover';
    deleteButton.addEventListener('click', removeTask);

    newTask.appendChild(deleteButton);

    // Marca como concluída ao clicar
    newTask.addEventListener('click', toggleComplete);

    taskList.appendChild(newTask);
    taskInput.value = ''; // Limpa o campo de input
}

// Função para remover a tarefa
function removeTask(event) {
    event.stopPropagation(); // Evita marcar a tarefa como concluída
    const taskToRemove = event.target.parentElement;
    taskList.removeChild(taskToRemove);
}

// Função para marcar/desmarcar a tarefa como concluída
function toggleComplete(event) {
    event.target.classList.toggle('completed');
}

// Adiciona a tarefa ao clicar no botão
addTaskButton.addEventListener('click', addTask);

// Adiciona a tarefa ao pressionar a tecla Enter
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
