import { useContext } from "react"
import { TasksContext } from "../contexts/tasks"

export const useTasks = () => {
    const { tasks, addTask, updateStatusTask, deleteTask, editNameTask, clearAllTasks } = useContext(TasksContext)

    return { tasks, addTask, updateStatusTask, deleteTask, editNameTask, clearAllTasks }
}