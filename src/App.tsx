import React, {useState} from 'react';
import './App.css';
import {filterType, TaskType, Todolist} from "./Todolist";

function App() {
    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])

    const deleteTask = (task: TaskType) => {
        setTasks(tasks.filter(t => t.id !== task.id))
    }

    /*   const [filter, setFilter] = useState<filterType>("All")
       const tasksFilter = (filter: filterType) => {
           setFilter(filter)
       }
       let tasksForTodolist: Array<TaskType> = tasks
       if (filter === 'Active') {
           tasksForTodolist = tasks.filter(t => !t.isDone)
       }
       if (filter === 'Completed') {
           tasksForTodolist = tasks.filter(t => t.isDone)
       }*/


    return (
        <div className="App">
            <Todolist tasks={tasks}
                      deleteTask={deleteTask}
            />
        </div>
    );
}

export default App;
