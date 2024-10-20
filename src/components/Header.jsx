import { useEffect, useRef, useState } from "react"
import { useTasks } from "../hooks/useTasks"
import { ArrowUp } from "./icons/SetIcons"

export const Header = () => {
    const [newTaskInput, setNewTaskInput] = useState('')
    const { tasks, addTask } = useTasks()
    const newTaskFocusRef = useRef(null)

    const handleInputTask = (e) => {
        setNewTaskInput(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (tasks.find(t => t.name === newTaskInput) || newTaskInput === '') return
        const newTask = {
            id: new Date().getTime(),
            name: newTaskInput,
            done: false
        }
        addTask(newTask)
        setNewTaskInput('')
    }

    useEffect(() => {
        if (newTaskFocusRef.current) {
            newTaskFocusRef.current.focus()
        }
    }, [])

    return (
        <header className="sticky top-5 z-10 px-5">
            <form className="flex flex-row gap-2 items-center opacity-0 animate-fadeInUp" onSubmit={submitForm}>
                <input onChange={handleInputTask} type="text" value={newTaskInput} ref={newTaskFocusRef}
                    placeholder={`What do you want to do?`}
                    className="border-[1px] rounded-lg px-2 py-2 flex-1 text-md transition-colors
                    border-zinc-700 bg-zinc-100 hover:bg-zinc-100 text-zinc-800
                    dark:border-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-900 dark:text-zinc-200"/>
                <button className="rounded-full p-2 border-[1px] hover:rotate-180 transition-all
                    border-zinc-700 bg-zinc-100 hover:bg-zinc-100 text-zinc-800
                    active:[box-shadow:_inset_0_0_0_1px_black]
                    dark:border-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-900 
                    dark:active:[box-shadow:_inset_0_0_0_1px_white] dark:text-zinc-200">
                    <ArrowUp height='25px' width='25px' fill='none'></ArrowUp>
                </button>
            </form>
        </header>
    )
}
