import { useState } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState([ ]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if(newTask === '') return;

        setTasks(t => [...t, newTask]);
        setNewTask('');
    }

    function deleteTask(index) {
        setTasks(t => t.filter((task, i) => i !== index));
    }

    function moveTaskUp(index) {
        if(index === 0) return;

        const updatedTasks = [...tasks];
        [updatedTasks[index - 1], updatedTasks[index]] = 
        [updatedTasks[index], updatedTasks[index - 1]];
        setTasks(updatedTasks);
    }

    function moveTaskDown(index) {
        if(index === tasks.length - 1) return;

        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = 
        [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }

    return (
        <div className='todo-list'>
            <h1>To-Do-List</h1>

            <div>
                <input 
                    type="text"
                    placeholder='Add a new task...'
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className='add-btn' onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className='todo-text'> {task} </span>
                        <button className='move-btn' onClick={() => moveTaskUp(index)}>☝️</button>
                        <button className='delete-btn' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='move-btn' onClick={() => moveTaskDown(index)}>👇</button>        
                    </li> )}
            </ol>
        </div>
    )
}

export default ToDoList;