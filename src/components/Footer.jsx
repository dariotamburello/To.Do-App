import { useFilters } from "../hooks/useFilters"
import { useTasks } from "../hooks/useTasks"
import { ButtonFilter } from "./ButtonFilter"
import { Trash } from "./icons/SetIcons"

export const Footer = () => {
    const { tasks, clearAllTasks } = useTasks()
    const { filter, setFilter } = useFilters()

    const activeTasks = tasks.filter(t => t.done === false)
    const qtyActiveTask = activeTasks.length

    const handleClickFilterTask = (filter) => {
        setFilter(filter)
    }

    const handleClickClearAll = () => {
        clearAllTasks()
    }

    return (
        <footer className="mt-10 grid grid-cols-12 sm:flex flex-row gap-1 justify-between items-center sticky 
        bottom-1 w-full px-2 py-2 rounded-md opacity-0 animate-fadeInUp
        bg-zinc-300 text-zinc-800
        dark:bg-zinc-600 dark:text-zinc-200">
            <p className="col-span-4 text-xs">{qtyActiveTask} task{qtyActiveTask > 1 && 's'}
                <strong className="text-green-700 dark:text-green-400"> active{qtyActiveTask > 1 && 's'}</strong>
            </p>
            <div className="col-span-4 grid grid-flow-row sm:flex flex-row gap-1 items-center">
                <ButtonFilter filter={filter} handleClickFilterTask={handleClickFilterTask} condition='all' >
                </ButtonFilter>
                <ButtonFilter filter={filter} handleClickFilterTask={handleClickFilterTask} condition='actives' >
                </ButtonFilter>
                <ButtonFilter filter={filter} handleClickFilterTask={handleClickFilterTask} condition='completed' >
                </ButtonFilter>
            </div>
            <div className="col-span-4 group relative flex items-center justify-center cursor-pointer" onClick={handleClickClearAll}>
                <button className="text-xs select-none px-4 py-2 group-hover:scale-0 transition-all">Clear all</button>
                <button className="absolute select-none px-4 py-2 scale-0 group-hover:scale-100 transition-all">
                    <Trash height='20px' width='20px' fill='transparent'></Trash>
                </button>
            </div>
        </footer>
    )
}
