import React, {KeyboardEvent, ChangeEvent, useState} from "react";
import {v1} from "uuid";
import {Button} from "./components/Button";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    tasks: Array<TaskType>
    deleteTask: (taskId: string) => void
    addTask: (taskTitle: string) => void
}

export type filterType = "All" | "Active" | "Completed"

export const Todolist = (props: PropsType) => {

    const [filter, setFilter] = useState<filterType>("All")
    const [title, setTitle] = useState<string>('')

    const changeFilterHandler = (value: filterType) => {
        setFilter(value)
    }

    let tasksForTodolist: Array<TaskType> = props.tasks
    if (filter === 'Active') {
        tasksForTodolist = props.tasks.filter(t => !t.isDone)
    }
    if (filter === 'Completed') {
        tasksForTodolist = props.tasks.filter(t => t.isDone)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }

    const deleteTaskHandler = (taskId:string) => props.deleteTask(taskId)

    return (
        <div>
            <div>
                <h3>What to learn</h3>
                <div>
                    <input onChange={onChangeHandler}
                           onKeyPress={onKeyPressHandler}
                           value={title}/>
                    {/*<button onClick={addTaskHandler}>+
                    </button>*/}
                    <Button value={'+'} callBack={addTaskHandler}/>
                </div>
                <ul>
                    {tasksForTodolist.map(t => {
                        return <li key={t.id}>
                            {/*<button onClick={() => deleteTaskHandler(t.id)}>X
                            </button>*/}
                            <Button value={'X'} callBack={() => deleteTaskHandler(t.id)}/>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                        </li>
                    })}
                </ul>
                <div>
                   {/* <button onClick={() => changeFilterHandler("All")}>All</button>
                    <button onClick={() => changeFilterHandler("Active")}>Active</button>
                    <button onClick={() => changeFilterHandler("Completed")}>Completed</button>*/}
                    <Button value={"All"} callBack={() => changeFilterHandler("All")}/>
                    <Button value={"Active"} callBack={() => changeFilterHandler("Active")}/>
                    <Button value={"Completed"} callBack={() => changeFilterHandler("Completed")}/>
                </div>
            </div>
        </div>
    );
}