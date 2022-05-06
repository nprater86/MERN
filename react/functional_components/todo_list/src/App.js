import './App.css';
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import RenderTasks from './components/RenderTasks';

function App() {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    
    useEffect(() => {
        localStorage.setItem("tasks",JSON.stringify(tasks));
    })
    
    function addTask( newTask ){
        setTasks(tasks => [...tasks, newTask]);
    }

    function handleCheck(checkedI){
        const checkedTasks = tasks.map( (task,i) => {
            if(i === checkedI){
                if(task.checked === true){
                    task.checked = false;
                } else {
                    task.checked = true;
                }
            }
            return task;
        });

        setTasks(checkedTasks);
    }

    function handleDelete(deletedI){
        const filteredTasks = tasks.filter( (task,i) => i !== deletedI);
        setTasks(filteredTasks);
    }

    return (
        <div className="App">
            <TaskForm onNewTask={ addTask }/>
            <RenderTasks tasks={ tasks } onCheck={ handleCheck } onDelete={ handleDelete }/>
        </div>
    );
}

export default App;
