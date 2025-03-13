import React, { useEffect, useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tarefa");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    
    const [newTask, setNewTask] = useState("")

    // carregar as tarefas do localStorage assim que iniciar a aplicação
    useEffect(() => {
        const storedTasks = localStorage.getItem("tarefa");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, [])

    // salva as tarefas no localStorage sempre que tasks mudar
    useEffect(() => {
        localStorage.setItem("tarefa", JSON.stringify(tasks))
    }, [tasks])

    function handleInputChange(e){
        setNewTask(e.target.value)
    }
    
    // função para adicionar tarefa
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    // função para deletar uma tarefa
    function deleteButton(index){
        const updateTask = tasks.filter((_, i) => i !== index)
        setTasks(updateTask)
    }

    // função para mover uma tarefa para cima
    function moveUp(index){
        if(index > 0){
            // cria uma cópia do array "tasks"
            const updateTask = [...tasks];
            // troca a posição do item atual com o anterior
            [updateTask[index], updateTask[index - 1]] = 
            [updateTask[index - 1], updateTask[index]];
            setTasks(updateTask)
        }
    }

    // função para mover uma tarefa para baixo
    function moveDown(index){
        if(index < tasks.length - 1){
            const updateTask = [...tasks];
            // troca a posição do item atual com o próximo item no array
            [updateTask[index], updateTask[index + 1]] = 
            [updateTask[index + 1], updateTask[index]];
            setTasks(updateTask)
        }
    }

  return (
    <div className='to-do-list'>
        <h1>To-Do-List</h1>

        <div>
            <input type="text" 
                    placeholder='Escreva a tarefa aqui...'
                    value={newTask}
                    onChange={handleInputChange}/>

            <button className='add-button' onClick={addTask}>Adicionar</button>
        </div>

        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button' onClick={() => deleteButton(index)}>Delete</button>
                    <button className='move-button' onClick={() => moveUp(index)}>⬆</button>
                    <button className='move-button' onClick={() => moveDown(index)}>⬇</button>
                </li>
            )}
        </ol>
    </div>
  )
}

export default ToDoList