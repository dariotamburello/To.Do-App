import { createContext, useReducer } from "react";
import { initialState, taskReducer } from "../reducers/task";

export const TasksContext = createContext()

export const TasksProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState)

    const addTask = (newTask) => {
        const action = {
            type: 'ADD_TASK',
            payload: newTask
        }
        dispatch(action)
    }

    const updateStatusTask = (task) => {
        const action = {
            type: 'UPDATE_STATUS_TASK',
            payload: task
        }
        dispatch(action)
    }

    const deleteTask = (task) => {
        const action = {
            type: 'DELETE_TASK',
            payload: task
        }
        dispatch(action)
    }

    const editNameTask = (task) => {
        const action = {
            type: 'EDIT_NAME_TASK',
            payload: task
        }
        dispatch(action)
    }

    const clearAllTasks = () => {
        const action = {
            type: 'CLEAR_ALL_TASKS'
        }
        dispatch(action)
    }

    return (
        <TasksContext.Provider value={{
            tasks: state,
            addTask,
            updateStatusTask,
            deleteTask,
            editNameTask,
            clearAllTasks
        }}>
            {children}
        </TasksContext.Provider>
    )
}