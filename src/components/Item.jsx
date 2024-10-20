import { useTasks } from "../hooks/useTasks"
import { Circle, X } from "./icons/SetIcons"
import { useEditInput } from "../hooks/useEditInput"

export const Item = ({ task, handleDragStart }) => {

    const { id, name, done } = task

    const { updateStatusTask, deleteTask, editNameTask } = useTasks()
    const { viewEditInputTask, setViewEditInputTask, editInputTask, setEditInputTask, itemRef, focusRef } = useEditInput()

    const handleTaskDone = () => {
        updateStatusTask(task)
    }

    const handleDeleteTask = (task) => {
        deleteTask(task)
    }

    const handleChangeHidenInput = (e) => {
        setEditInputTask(e.target.value)
    }

    const handleDoubleClick = () => {
        setEditInputTask(task.name)
        setViewEditInputTask(true)
    }

    const handleSubmitEditTask = (e, task) => {
        e.preventDefault()
        const newTask = {
            ...task,
            name: editInputTask
        }
        editNameTask(newTask)
        setViewEditInputTask(false)
    }

    return (
        <li ref={itemRef} key={id} id={id} draggable='true' onDragStart={(e) => handleDragStart(e, id)}
            className={`flex flex-row justify-between items-center px-2 py-2 opacity-0 animate-fadeInUp active:cursor-grabbing
            border-b-[1px] border-b-zinc-300 dark:border-b-zinc-700
            hover:bg-zinc-300 dark:hover:bg-zinc-500 ${viewEditInputTask ? 'border-2 border-red-500' : ''}`}>
            <form onSubmit={(e) => handleSubmitEditTask(e, task)} className='flex gap-1 items-center w-full'>
                <input hidden type='checkbox' onChange={handleTaskDone} checked={done} />
                <label data-done={done} onClick={handleTaskDone} label='Mark as done!'
                    className='hover:cursor-pointer text-zinc-200 dark:text-zinc-900 stroke-zinc-900 dark:stroke-zinc-200 data-[done=true]:text-zinc-900 data-[done=true]:dark:text-zinc-200'  >
                    <Circle height='25px' width='25px' done={done}></Circle>
                </label>
                <p hidden={viewEditInputTask} onDoubleClick={(e) => handleDoubleClick(e, task)}
                    className={`ml-1 w-full text-md ${done && 'line-through'} font-Roboto select-none
                    dark:text-white/80`}>{name}</p>
                <input ref={focusRef} hidden={!viewEditInputTask} onChange={handleChangeHidenInput} value={editInputTask} type="text"
                    className="text-md w-full italic bg-transparent outline-none" />
            </form>

            <div onClick={() => handleDeleteTask(task)} className="opacity-0 hover:opacity-100 hover:cursor-pointer transition-all">
                <X height='25px' width='25px'></X>
            </div>
        </li>
    )
}
