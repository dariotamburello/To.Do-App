import { useId } from "react"
import { Item } from "./Item"

export const CardOfTasks = ({ tasks, tasksStatus, title, drop, allowDrop, handleDragStart }) => {
    const ulId = useId()
    const filteredTasks = tasks.filter(t => t.done === tasksStatus)
    return (
        <article id='completed_tasks'>
            <h2 className="text-xs uppercase select-none mb-0 px-3 dark:text-zinc-400">{title}</h2>
            <ul id={ulId} className="border-[1px] rounded-md flex flex-col shadow-md min-h-5
            bg-zinc-100 border-zinc-500 shadow-zinc-500
            dark:bg-zinc-800 dark:border-zinc-500 dark:shadow-zinc-500"
                onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>
                {
                    filteredTasks.length > 0
                        ?
                        filteredTasks.map(task => (
                            <Item key={task.id} task={task} handleDragStart={handleDragStart}></Item>
                        ))
                        :
                        <li className="text-xs px-3 py-3 text-white/70 opacity-0 animate-fadeInUp">Without tasks...</li>
                }
            </ul>
        </article>
    )
}
