export const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK': {
            const newTasks = [...state, action.payload]
            updateLocalStorage(newTasks)
            return newTasks
        }
        case 'UPDATE_STATUS_TASK': {
            const indexTask = state.findIndex(t => t.id === action.payload.id)
            const newTasks = structuredClone(state)
            newTasks[indexTask].done = !action.payload.done
            updateLocalStorage(newTasks)
            return newTasks
        }
        case 'DELETE_TASK': {
            const newTasks = state.filter(t => t.id !== action.payload.id)
            updateLocalStorage(newTasks)
            return newTasks
        }
        case 'EDIT_NAME_TASK': {
            const indexTask = state.findIndex(t => t.id === action.payload.id)
            const newTasks = structuredClone(state)
            newTasks[indexTask].name = action.payload.name
            updateLocalStorage(newTasks)
            return newTasks
        }
        case 'CLEAR_ALL_TASKS':
            updateLocalStorage([])
            return []
        default:
            return state
    }
}

export const updateLocalStorage = state => {
    window.localStorage.setItem('tasks', JSON.stringify(state))
}