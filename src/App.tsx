import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {filterType, TaskType, Todolist} from "./Todolist";

function App() {
    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])

    const deleteTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    const addTask = (taskTitle: string) => {
        if (taskTitle.trim()) {
            setTasks([
                {id: v1(), title: taskTitle, isDone: false},
                ...tasks
            ])
                   }
    }

    return (
        <div className="App">
            <Todolist tasks={tasks}
                      deleteTask={deleteTask}
                     addTask={addTask}
            />
        </div>
    );
}

export default App;
