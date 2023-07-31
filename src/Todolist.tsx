import React, {useState} from "react";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    tasks: Array<TaskType>
    deleteTask: (task: TaskType) => void
}

export type filterType = "All" | "Active" | "Completed"

export const Todolist = (props: PropsType) => {

    const [filter, setFilter] = useState<filterType>("All")
    const tasksFilter = (filter: filterType) => {
        setFilter(filter)
    }

        let tasksForTodolist: Array<TaskType> = props.tasks
        if (filter === 'Active') {
            tasksForTodolist = props.tasks.filter(t => !t.isDone)
        }
        if (filter === 'Completed') {
            tasksForTodolist = props.tasks.filter(t => t.isDone)
        }


    return (
        <div>
            <div>
                <h3>What to learn</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {tasksForTodolist.map(t => {
                        return <li key={t.id}>
                            <button onClick={() => props.deleteTask(t)}>X
                            </button>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                        </li>
                    })}
                </ul>
                <div>
                    <button onClick={() => tasksFilter("All")}>All</button>
                    <button onClick={() => tasksFilter("Active")}>Active</button>
                    <button onClick={() => tasksFilter("Completed")}>Completed</button>
                </div>
            </div>
        </div>
    );
}